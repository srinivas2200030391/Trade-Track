package com.tradetrack.services;

import com.tradetrack.models.*;
import com.tradetrack.repositories.AdminRepository;
import com.tradetrack.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AdminRepository adminRepository;

    public Users createUser(Users users) {
        return userRepository.save(users);
    }

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public Users getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + id));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Check in each repository
        Admin admin = adminRepository.findAdminByEmail(email);
        if (admin != null) {
            return createUserDetails(admin.getName(), admin.getPassword(), "ADMIN");
        }

        Users user = userRepository.findUserByEmail(email);
        if (user != null) {
            return createUserDetails(user.getName(), user.getPassword(), "User");
        }

        throw new UsernameNotFoundException("User not found");
    }
    private UserDetails createUserDetails(String username, String password, String role) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        return new User(username, password, authorities);
    }
    public Map<String, Object> getUserDetails(String email) {
        Map<String, Object> response = new HashMap<>();

        // Check in each repository
        Admin admin = adminRepository.findAdminByEmail(email);
        if (admin != null) {
            response.put("role", "ADMIN");
            response.put("user", admin);
            return response;
        }

        Users user = userRepository.findUserByEmail(email);
        if (user != null) {
            response.put("role", "USER");
            response.put("user", user);
            return response;
        }

        return null;
    }
}
