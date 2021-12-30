/*package com.admin.AdminContactService;

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
class AdminContactServiceApplicationTests {

	@Autowired
	private ContactService contactService;
	
	@MockBean
	private ContactRepository conatctRepository;

	@Test
	public void getContactTest() {
		when(conatctRepository.findAll()).thenReturn(Stream
				.of(new Contact("1","Siddharth","8765432190"), new Contact("2","Raj","7234488721s")).collect(Collectors.toList()));
		assertEquals(2,contactService.getContact().size());
		System.out.println("Get Contact Test Case Passed");
	}
		@Test
		public void saveContactTest() {
			Contact contact = new Contact("4", "Rani", "762587388");
			when(conatctRepository.save(contact)).thenReturn(contact);
			assertEquals(contact, contactService.addContact(contact));
			System.out.println("Save Contact Test Case Passed");
		}

}*/