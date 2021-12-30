package com.admin.AdminContactService.Services;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService implements UserDetailsService {
    @Autowired
    private ContactRepository contactRepository;
    
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Contact foundedAdmin =contactRepository.findByUsername(username);
		if (foundedAdmin==null) {
			return null;
		}
		String user=foundedAdmin.getUsername();
		String pass=foundedAdmin.getPassword();
		return new User(user, pass,new ArrayList<>());
}
    
    
    public Contact addContact(Contact contact){
        return contactRepository.save(contact);

    }

    public List<Contact> getContact(){
        List<Contact> contact=contactRepository.findAll();
        System.out.println("Getting Data from DataBase: "+contact);
        return contact;
    }

    public Optional<Contact> getContactById(String id){
        return contactRepository.findById(id);
    }

    public void deleteContact(Contact contact){
        contactRepository.delete(contact);
    }
}
