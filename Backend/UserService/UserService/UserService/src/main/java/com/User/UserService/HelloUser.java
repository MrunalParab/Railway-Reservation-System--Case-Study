package com.User.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloUser {
    @GetMapping("/helloUser")
    public String hello(){
        return "Hello From User Service";
    }
}