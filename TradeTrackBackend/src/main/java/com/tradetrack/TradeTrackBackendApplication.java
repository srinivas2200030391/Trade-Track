package com.tradetrack;

import com.tradetrack.controllers.UserController;
import com.tradetrack.models.Users;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class TradeTrackBackendApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(TradeTrackBackendApplication.class, args);
//        try{
//            UserController  usercontroller = context.getBean(UserController.class);
//            Users user = new Users();
//            user.setName("Srinivas Kommirisetty");
//            user.setEmail("srinivaskommirisetty13@gmail.com");
//            user.setPassword("srinivas");
//            usercontroller.createUser(user);
//        } catch (Exception e) {
//            System.out.println("Application failed to start");
//        }
    }

}
