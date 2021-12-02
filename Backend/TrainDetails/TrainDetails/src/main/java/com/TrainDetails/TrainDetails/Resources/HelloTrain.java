package com.TrainDetails.TrainDetails.Resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloTrain {
    @GetMapping("/helloTrain")
    public String hello(){
        return "Hello From Train Details Service";
    }
}