package com.admin.AdminContactService.Repository;

import com.admin.AdminContactService.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends MongoRepository<Contact,String> {
	
	Contact findByUsername(String username);
}

