package com.admin.AdminContactService.Repository;

import com.admin.AdminContactService.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ContactRepository extends MongoRepository<Contact,String> {
}
