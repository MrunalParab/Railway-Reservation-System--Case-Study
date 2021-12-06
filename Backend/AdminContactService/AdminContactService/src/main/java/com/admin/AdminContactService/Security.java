package com.admin.AdminContactService;

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
public class Security extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        	.httpBasic() //enable the feature to authenticate the user during HTTP request
        	.and()
        	.authorizeRequests() //allows restricting access based upon the HttpServletRequest using RequestMatcher implementations
        	.antMatchers("/contacts/**").hasRole("ADMIN") //configure the URL paths
        	.anyRequest() //restrict the access for any other endpoint other than PUBLIC_URL 
        	.authenticated() //user must be authenticated
        	.and()
        	.csrf().disable() //Cross-Site Request Forgery (CSRF) is an attack that forces authenticated users to submit 
        					  //a request to a Web application against which they are currently authenticated.
        	.formLogin().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("Admin").password(this.passwordEncoder().encode("admin")).roles("ADMIN");
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(10);
    }
}