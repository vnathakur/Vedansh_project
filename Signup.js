class SignUp{
	constructor(){
		//creating form elements
		this.name = createInput("").attribute("placeholder","Name");
	    this.username = createInput("").attribute("placeholder","User Name");
	    this.password = createInput("","password").attribute("placeholder","password");
	    this.confirmPassword = createInput("","Confirm password").attribute("placeholder","password");
	    this.submitSignUp = createButton("Sign Up");
	    
	    this.error = createElement("h5");
	}
	display(){
		
		if(gameState === 0){
			
			
		//set position for form elements		
			this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
	      	this.username.position(displayWidth/2 - 40, displayHeight/2 - 40);
	      	this.password.position(displayWidth/2 - 40, displayHeight/2);
	      	this.confirmPassword.position(displayWidth/2 - 40, displayHeight/2 + 40);
	      	this.submitSignUp.position(displayWidth/2 - 40, displayHeight/2 + 80);	      	

	      	//process detail when clicked button
	      	this.submitSignUp.mousePressed(()=>{
	      		//storing form data in a variable
	      		var pwd =this.password.value();
	      		var cPwd = this.confirmPassword.value();
	      		var name = this.name.value();
	      		var username = this.username.value();

	      		//check no field is empty 
	      		if(pwd && cPwd && name && username){
	      			this.error.hide(); //hide error message

	      			//comparing passwords
				    if(pwd===cPwd){

				    	//assigning form data to player class object
				        player.name = name;
				        player.username = username;
				        player.confirmPassword = pwd;
				        player.password =cPwd;
				        playerCount+=1;
				        player.index = playerCount;
				        
				        //updating player count
				        playerCount+=1;
				      	player.index = playerCount;

				      	signUp_clcik=0; 

				      	//form.showButton(); //calling function to show buttons
				      	this.hideForm(); //hiding form
				      	player.update(); //updating player data in database
				      	player.updateCount(playerCount); //update player count

				      	
				      	

				    }
				     else{
				     	//show error msg
				      	this.error.show();
				      	this.error.html("Please check password");
    					this.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
				    }
				}
				    else{
				    	//show error msg
						this.error.show();
				      	this.error.html("Please fill all the details");
    					this.error.position(displayWidth/2 - 40, displayHeight/2 + 100);
				      	
				    }
		    })
		}
		else{
			this.hideForm();//hide form
			this.error.hide();//hide errors

		}

	}
	hideForm(){
		//hide all form elements
		this.name.hide();
	    this.username.hide();
	    this.password.hide();
	    this.confirmPassword.hide();
	    this.submitSignUp.hide();
	}

}