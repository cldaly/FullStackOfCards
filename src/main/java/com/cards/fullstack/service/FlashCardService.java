package com.cards.fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cards.fullstack.models.FlashCard;
import com.cards.fullstack.repositories.FlashCardRepository;

//	Business logic goes here
@Service
public class FlashCardService {

	@Autowired
	FlashCardRepository flashCardRepo;
	
	//	Adds a flash card to the database. Can also be used to update? If given the same id.
	public FlashCard addFlashCard(FlashCard flashCard)
	{
		return flashCardRepo.insert(flashCard);
	}
	
	//	Removes a flash card by id from the database
	public void removeFlashCard(String id)
	{
		flashCardRepo.deleteById(id);
	}
	
	//	Returns all flash cards in the database
	public List<FlashCard> getAllFlashCards()
	{
		return flashCardRepo.findAll();
	}
	
	public List<FlashCard> getFlashCardsByUserId(String userId)
	{
		return flashCardRepo.findByUserId(userId);
	}
}
