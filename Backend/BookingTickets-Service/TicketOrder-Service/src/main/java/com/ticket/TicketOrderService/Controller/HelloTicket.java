package com.ticket.TicketOrderService.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloTicket {
    @GetMapping("/helloTicket")
    public String hello(){
        return "Hello From Ticket Order Service";
    }
}
