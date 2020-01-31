package com.cards.fullstack.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cards.fullstack.models.FlashCard;

@Repository
public interface FlashCardRepository extends MongoRepository<FlashCard, String> {

	public List<FlashCard> findByUserId(Long userId);
	
}
