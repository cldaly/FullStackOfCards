package com.cards.fullstack.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.cards.fullstack.models.User;
import com.cards.fullstack.repositories.UserRepository;

import java.util.*;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public User getUser(String username, String password)
	{
		return userRepository.findByUsernameAndPassword(username, password);
	}
	
	public User addUser(String username, String password)
	{
		String hashPass = BCrypt.hashpw(password, BCrypt.gensalt());
		User user = new User(username, hashPass);
		return userRepository.insert(user);
	}
	
	public List<User> getAllUserByName(String username)
	{
		return userRepository.findByUsername(username);
	}
	
	//	FOR DEBUGGING
	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
	
	public String deleteAllUsers()
	{
		userRepository.deleteAll();
		return "Deleted";
	}
}
