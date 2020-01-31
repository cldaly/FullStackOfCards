package com.cards.fullstack.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cards.fullstack.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

	public User findByUsernameAndPassword(String username, String password);
	
	public List<User> findByUsername(String username);
}
