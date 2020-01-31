package com.cards.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.security.crypto.bcrypt.*;

import com.cards.fullstack.models.User;
import com.cards.fullstack.service.UserService;

import java.util.*;

@RestController
@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody User user)
	{		
		if(userService.getAllUserByName(user.getUsername()).size() == 0)
			return new ResponseEntity<User>(userService.addUser(user.getUsername(), user.getPassword()), HttpStatus.OK);
		
		return null;		
	}
	
	@PostMapping("/login")
	@ResponseBody
	public ResponseEntity<User> login(@RequestBody User user)
	{
		//	Cycle through users with specified name
		for(User sUser : userService.getAllUserByName(user.getUsername()))
		{
			//	Check if any users match the password
			if(BCrypt.checkpw(user.getPassword(), sUser.getPassword()))
				return new ResponseEntity<User>(sUser, HttpStatus.OK);
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
