package com.cards.fullstack.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="flashcards")
public class FlashCard {
	
	@Id
	private String id;
	private String question;
	private String answer;
	private String resourceName;
	private String resourceLink;
		
	private String userId;
	
	public FlashCard(String question, String answer, String resourceName, String resourceLink, String userId) {
		this.question = question;
		this.answer = answer;
		this.resourceName = resourceName;
		this.resourceLink = resourceLink;
		this.userId = userId;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public String getResourceLink() {
		return resourceLink;
	}
	public void setResourceLink(String resourceLink) {
		this.resourceLink = resourceLink;
	}
	
	
}
