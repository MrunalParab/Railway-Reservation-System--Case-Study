package com.example.demo.model;

public class AuthenticationRequest {

	private String name;
	private String password;
	private String mobileNumber;
	private String email;
	private String gender;

	public AuthenticationRequest(String name, String password,String mobileNumber,String email,String gender) {
		this.name = name;
		this.password = password;
		this.mobileNumber=mobileNumber;
		this.email=email;
		this.gender=gender;
	}
	
	
public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	//	public String getMobileNumber1() {
//		return mobileNumber;
//	}
	public String getMobileNumber() {
		// TODO Auto-generated method stub
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public AuthenticationRequest() {
		
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "AuthenticationRequest{" +
				"Email='" + email + '\'' +
				", password='" + password + '\'' +
				'}';
	}

	
}
