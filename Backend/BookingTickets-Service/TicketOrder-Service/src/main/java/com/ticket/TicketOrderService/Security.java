package com.ticket.TicketOrderService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter{
	@Override
	protected void configure(HttpSecurity http)throws Exception{
		http
	         .httpBasic()
	         .and()
	         .authorizeRequests()
			 .antMatchers("/booking/booked/").permitAll()//allow the public access that is anyone can access endpoint PUBLIC_URL without authentication
			.antMatchers("/booking/addBooking/","/booking/update/","/booking/del/").hasRole("ADMIN")
			.anyRequest()
	        .authenticated()
	        .and()
	        .csrf().disable()
	        .formLogin().disable();
	}
	@Override
	protected void configure(AuthenticationManagerBuilder auth)throws Exception {
		auth.inMemoryAuthentication().withUser("Admin").password(this.pass().encode("admin")).roles("ADMIN");
		auth.inMemoryAuthentication().withUser("Mrunal").password(this.pass().encode("mrunal22")).roles("USER");
	}
	 @Bean
	    public PasswordEncoder pass(){
		 	//return NoOpPasswordEncoder.getInstance();
	        return new BCryptPasswordEncoder(15);
	    }
}