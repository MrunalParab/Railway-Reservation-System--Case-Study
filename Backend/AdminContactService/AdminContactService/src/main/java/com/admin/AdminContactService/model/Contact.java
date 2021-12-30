package com.admin.AdminContactService.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Contacts")
public class Contact {
    @Id
    private String id;
    private String username;
    private String password;
    private String name;
    private  String phone;

    public Contact() {
    }

    public Contact(String id, String name, String phone, String username, String password) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.username = username;
		this.password = password;
    }

	public String getId() {
        return id;
    }

    public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

	@Override
	public String toString() {
		return "Contact [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name + ", phone="
				+ phone + "]";
	}
}
