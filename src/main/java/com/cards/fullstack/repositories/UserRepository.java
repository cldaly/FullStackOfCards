package com.cards.fullstack.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cards.fullstack.models.User;

public interface UserRepository extends MongoRepository<User, String> {

	public User findByUsernameAndPassword(String username, String password);
	
	public List<User> findByUsername(String username);
}
