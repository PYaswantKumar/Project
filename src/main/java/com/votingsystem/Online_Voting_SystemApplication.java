package com.votingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class Online_Voting_SystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(Online_Voting_SystemApplication.class, args);
		System.out.println("Your application is started...");
	}

}
