package com.tradetrack.controllers;

import com.tradetrack.security.JwtService;
import com.tradetrack.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/signin")
@CrossOrigin(origins="*")
public class SignInController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtService jwtService;

    public SignInController(AuthenticationManager authenticationManager, UserService userService, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping
    public ResponseEntity<?> signIn(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String password = payload.get("password");
        System.out.println("Username: " + email);
        System.out.println("Password: " + password);
        try {
            // First authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
            System.out.println("YES");
            // If authentication successful, get user details
            Map<String, Object> userDetails = userService.getUserDetails(email);

            if (userDetails != null) {
                UserDetails user = (UserDetails) authentication.getPrincipal();
                String role = (String) userDetails.get("role");
                String jwt = jwtService.generateToken(user, role);

                Map<String, Object> response = new HashMap<>();
                response.put("token", jwt);
                response.put("user", userDetails);

                return ResponseEntity.ok(response);
            }

            return ResponseEntity.badRequest().body("User details not found");

        } catch (AuthenticationException e) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
    }
}
