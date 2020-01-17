package com.cards.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.crypto.bcrypt.*;

import com.cards.fullstack.models.User;
import com.cards.fullstack.service.UserService;

import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> register(String username, String password)
	{		
		if(userService.getAllUserByName(username).size() == 0)
			return new ResponseEntity<User>(userService.addUser(username, password), HttpStatus.OK);
		
		return null;		
	}
	
	@GetMapping("/login")
	public ResponseEntity<User> login(String username, String password)
	{
		//	Cycle through users with specified name
		for(User user : userService.getAllUserByName(username))
		{
			//	Check if any users match the password
			if(BCrypt.checkpw(password, user.getPassword()))
				return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		//	Return null is user is not found
		return null;
	}
	
	
	//	FOR DEBUGGING
	@GetMapping("/getUsers")
	public ResponseEntity<List<User>> getUsers()
	{		
		List<User> users = userService.getUsers();		
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteAllUsers")
	public String deleteAllUsers()
	{
		userService.deleteAllUsers();
		return "Deleted";
	}
}
