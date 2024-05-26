import { LightningElement } from "lwc";

export default class QuizApp extends LightningElement {
  selected = {}; // for storing answers
  correctAnswers = 0; // to show the correct answer
  isSubmitted = false; // use to show the result

  get isScoredFull() {
    return `slds-text-heading_large ${
      this.myQuestions.length === this.correctAnswers
        ? "slds-text-color_success"
        : "slds-text-color_error"
    }`;
  }

  get allNotSelected() {
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }

  myQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template loop",
      answers: {
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question: "Which of the file is invalid in LWC component folder",
      answers: {
        a: ".svg",
        b: ".apex",
        c: ".js"
      },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "Which one of the following is a directive",
      answers: {
        a: "for:each",
        b: "if:true",
        c: "@track"
      },
      correctAnswer: "c"
    }
  ];

  changeHandler(e) {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const { name, value } = e.target;
    this.selected = { ...this.selected, [name]: value };
  }

  handleSubmit(e) {
    e.preventDefault();
    let correct = this.myQuestions.filter(
      (item) => this.selected[item.id] === item.correctAnswer
    );
    this.correctAnswers = correct.length;
    this.isSubmitted = true;
  }

  handleReset() {
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false;
  }
}
