class Login{
	constructor(){
		//create form elements
		this.lName = createInput("").attribute("placeholder","User Name");
	    this.lPassword = createInput("","password").attribute("placeholder","password");
	    this.login = createButton("Log In");
		this.welcome =createElement('h2');
		this.error = createElement("h5");
		this.nextButton = createButton("Next");
	    this.title = createElement('h6');
	    this.title2 = createElement('h6');
	    this.title3 = createElement('h6');

	}	
	display(){
		
			Player.getPlayerInfo();//get player info from database
			this.nextButton.hide();
			//setposition of elements
			this.lName.position(displayWidth/2 - 40, displayHeight/2 - 40);
      		this.lPassword.position(displayWidth/2 - 40, displayHeight/2);
      		this.login.position(displayWidth/2 - 35, displayHeight/2 + 40);

      		//when login button is pressed
      		this.login.mousePressed(()=>{
      			//store the form values
	      		var name = this.lName.value();
	      		var pwd = this.lPassword.value();
	      		
	      		//check input is not empty      		
	      		if(name && pwd){ 
	      			//check data is present in database
		      		if(allPlayers !== undefined){
	      				this.error.hide(); //hide errors
	      				
	      				//process all the values from database
		      			for(var plr in allPlayers){ 
		      				
		      				//compare the form data with database
		      				if(allPlayers[plr].username === name && allPlayers[plr].password === pwd){
		      					//login success
		      					this.hideForm();//hide current form
		      					form.hideButton();// hide login & signup buttons

								  
		      					this.welcome.html("Welcome Back!!!");
								this.welcome.position(displayWidth/2 - 40 , displayHeight/2 - 80);
								
								this.title.html("Welcome to The Thrilling Escape!! So the story goes like this: You have been captured by terrorists. To be free, you have to escape the the warehouse you have been trapped inside. The warehouse has a total of 20 rooms.<br><br> Each room  will have a certain amount of terrorists inside. You will have to kill every single one of them and then find a key. This key will be possessed by one of the terrorists. The key will give you access to the next room.<br><br> Every room is a level. Once you cross all, you will be given access to the next seaason. Good luck, we hope you enjoy our game!!!");
								this.title.position(displayWidth/2-530, displayHeight/2);
								this.nextButton.show();
								this.nextButton.position(displayWidth/2, displayHeight/2+200);
	
								this.nextButton.mousePressed(()=>{
									this.title.hide();
									this.title2.hide();
									this.title3.hide();
									this.nextButton.hide();
									game = new Game();
									game.display();
								});

		      					
		      				}else{
								
								this.showError();
								
							}
		      				
		      			}
		      		}else{
						 
		      			this.showError();
				      
		      		}
		      	}
		      	else{
					  
		      		this.showError();
				    
		      	}
		    });	
		     
      		
	}
	hideForm(){
		this.lName.hide();
      	this.lPassword.hide();
      	this.login.hide();
	}
	showError(){
		this.error.html("Please try again");
    	this.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
	}
}