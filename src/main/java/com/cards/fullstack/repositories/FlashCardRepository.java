package com.cards.fullstack.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cards.fullstack.models.FlashCard;

public interface FlashCardRepository extends MongoRepository<FlashCard, String> {

}
