export class Card {
    id;
    question;
    answer;
    resourceName;
    resourceLink;
    showAnswer;

    constructor(id, question,answer,resourceName,resourceLink) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.resourceName = resourceName;
        this.resourceLink = resourceLink;
        this.showAnswer = false;
    }
}