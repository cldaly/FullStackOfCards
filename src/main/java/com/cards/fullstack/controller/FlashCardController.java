package com.cards.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cards.fullstack.service.FlashCardService;
import com.cards.fullstack.models.FlashCard;

import java.util.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/flashcards")
public class FlashCardController {

	@Autowired
	FlashCardService flashCardService;
	
	@GetMapping("/getCards")
	@ResponseBody
	public ResponseEntity<List<FlashCard>> getCards()
	{
		return new ResponseEntity<List<FlashCard>>(flashCardService.getAllFlashCards(), HttpStatus.OK);
	}
	
	@PostMapping("/addCard")		
	public ResponseEntity<FlashCard> addCards(@RequestBody FlashCard flashCard)
	{
		flashCardService.addFlashCard(flashCard);
		return new ResponseEntity<FlashCard>(flashCard, HttpStatus.OK); 
	}
	
	@GetMapping("/getUserCards")
	public ResponseEntity<List<FlashCard>> getUserCards(@RequestParam("userId") String userId)
	{
		return new ResponseEntity<List<FlashCard>>(flashCardService.getFlashCardsByUserId(userId), HttpStatus.OK);
	}
	
	@DeleteMapping("/removeCard/{id}")
	public ResponseEntity removeCard(@PathVariable String id)
	{
		flashCardService.removeFlashCard(id);
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
