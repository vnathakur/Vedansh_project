class Form {

  constructor() {
    
    this.logIn = createButton("Log In");
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.signUp = createButton("Sign Up");
    this.reset = createButton('Reset');
  }
  
  hide(){
    this.greeting.hide();
  }
  showButton(){
    this.signUp.show();
    this.logIn.show();

  }
  
  hideButton(){
    this.signUp.hide();
    this.logIn.hide();
  }
  display(){
    this.title.html("The Thrilling Escape");
    this.title.position(displayWidth/2 - 50, 0);

    this.signUp.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.logIn.position(displayWidth/2 - 35, displayHeight/2 - 40);
    this.reset.position(displayWidth-100,20);
   

    
   
    this.signUp.mousePressed(()=>{
      sForm = new SignUp();
      signUp_clcik = 1;
      this.hideButton();//calling hideButton()

      //create object of signup class
      
      sForm.display();//calling display()
    });

    

    this.logIn.mousePressed(()=>{
      lForm = new Login();
      this.hideButton();
      
      lForm.display();
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.updatePlayers();
    });

  }
}
