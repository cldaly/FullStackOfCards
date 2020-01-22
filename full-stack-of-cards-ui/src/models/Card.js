export class Card {
    id;
    question;
    answer;
    resourceLink;
    showAnswer;

    constructor(id, question,answer,resourceLink) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.resourceLink = resourceLink;
        this.showAnswer = false;
    }
}