package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloApi {
    @GetMapping("/helloApi")
    public String hello(){
        return "Hello From API Gateway Service";
    }
}
