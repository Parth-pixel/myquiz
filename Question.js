class Question {
constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Answer");
    this.button = createButton('Submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.input1.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
  }

  display(){
    this.title.html("Quiz");
    this.title.position(350,0);

    this.question.html("Question : What start with and ends with the letter E, but has only one letter");
    this.question.position(100,100);
   // this.question.position(150,80);
    this.option1.html("1: Everyone ");
    this.option1.position(150,200);
    this.option2.html("2: Envelope");
    this.option2.position(150,250);

   this.input.position(50,350);
   this.input1.position(250,350);
   this.button.position(170,370);

   this.button.mousePressed(()=>{
     this.title.hide();
     this.input1.hide();
     this.input.hide();
     this.button.hide();
     contestants.name = this.input.value();
     contestants.answer = this.input1.value();
     contestantCount=+1;
     contestants.index = contestantCount;
     contestants.update();
     contestants.updateCount(contestantCount);

   })
  }
}
