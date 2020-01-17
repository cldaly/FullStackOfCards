package com.cards.fullstack.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cards.fullstack.models.FlashCard;

public interface FlashCardRepository extends MongoRepository<FlashCard, String> {

	public List<FlashCard> findByUserId(String userId);
}
