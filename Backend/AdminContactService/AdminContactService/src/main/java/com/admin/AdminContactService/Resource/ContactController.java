package com.admin.AdminContactService.Resource;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.model.AuthenticationRequest;
import com.admin.AdminContactService.model.AuthenticationResponse;
import com.admin.AdminContactService.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contacts")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;
    
    @Autowired
	private  AuthenticationManager  authenticationManager;
    
    @PostMapping("/addContact")
    public String addContact(@RequestBody Contact contact){
        contactRepository.save(contact);
        return "New Contact is Added to DataBase : "+contact.getId();
    }

    @GetMapping("/allContact")
    public List<Contact> getAllContact(){
        return contactRepository.findAll();
    }
    @GetMapping("/allContact/{id}")
    public Optional<Contact> getContactById(@PathVariable String id){
        return contactRepository.findById(id);
    }
    @GetMapping("/deletecontact/{id}")
    public String deleteContact(@PathVariable String id){
        contactRepository.deleteById(id);
        return id+" This Contact is deleted";
    }
    
    @PostMapping("/auth")
    private ResponseEntity<?> authContact(@RequestBody Contact contact) {
    	String username = contact.getUsername();
    	String password = contact.getPassword();
   
    	try {
    		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (Exception e) {
			

			return ResponseEntity.ok(new AuthenticationResponse("Error during admin Authentication" + username));
		}
		return ResponseEntity.ok(new AuthenticationResponse("Successfully Authenticated Admin " + username));
    	
    	
    }
}
