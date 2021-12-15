package com.admin.AdminContactService;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.admin.AdminContactService.Repository.ContactRepository;
import com.admin.AdminContactService.Services.ContactService;
import com.admin.AdminContactService.model.Contact;

@SpringBootTest
@RunWith(SpringRunner.class)
class ContactApplicationTests {
	
	@Autowired
	private ContactService contactService;
	
	@MockBean
	private ContactRepository contactRepository;

	@Test
	public void getContactTest() {
		when(contactRepository.findAll()).thenReturn(Stream
				.of(new Contact("1","Siddharth","8765432190"), new Contact("2","Bhartesh","9834512457")).collect(Collectors.toList()));
		assertEquals(2,contactService.getContact().size());
	}
		@Test
		public void saveContactTest() {
			Contact contact = new Contact("3", "Glen", "1234567232");
			when(contactRepository.save(contact)).thenReturn(contact);
			assertEquals(contact, contactService.addContact(contact));
		}

}
