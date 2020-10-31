var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers ;
var distance = 0;
var database;
var signUp_clcik= 0;
var sForm,lForm;

var form, player, game;

var img, img2, img3, img4;

var wall1, wall2, wall3, wall4;

var user = [];

function preload(){
  img = loadImage('Screenshot 2020-10-26 at 12.39.10 PM.png');
  img2 = loadImage('Screenshot 2020-10-26 at 12.34.09 PM.png');
  img3 = loadImage('Screenshot 2020-10-26 at 12.31.33 PM.png');
  img4 = loadImage('Screenshot 2020-10-26 at 12.28.06 PM.png');
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount >0){
    game.update(1);
  }
  //if(gameState === 1){
    //clear();
    //game.play();
  //}
  //if(gameState === 2){
    //game.end();
  //}



}