var PLAY = 1;
var END = 0;
var START=2;
var gameState = PLAY;

var home,homeImage
var police,policeImage
var ambulance,ambulanceImage
var bloodbank,bloodbankImage
var childhelpline,childhelplineImage
var railalert,railalertImage
var womenhelpline2,womenhelpline2Image
var corona,coronaImage
var coronanumber,coronanumberImage
var findme,findmeImage
var callImage
var globe,globeImage
var call

function preload() {
  homeImage=loadImage("images/findme2.png")
  policeImage=loadImage("images/police.png")
  ambulanceImage=loadImage("images/ambulance.png")
  bloodbankImage=loadImage("images/bloodbank.png")
  childhelplineImage=loadImage("images/childhelpline.png")
  railalertImage=loadImage("images/railalert.png")
  womenhelpline2Image=loadImage("images/womenhelpline2.png")
  coronaImage=loadImage("images/corona.png")
  coronanumberImage=loadImage("images/Covid helpline.png")
  findmeImage=loadImage("images/find me.png")
  callImage=loadImage("images/images (2).png")
  globeImage=loadImage("images/globe-with-location-pointers-vector-1285749.png")
}
function setup() {
 createCanvas(400, 400);
frameRate(5)

 
this.button = createButton("ALL EMERGENCY NUMBERS ");
this.hello=createButton("GET LOCATION ")
this.back=createButton("BACK")

home=createSprite(200,200)
home.addImage("firstscreen",homeImage)
home.scale=2.1

call=createSprite(200,200)
call.addImage("callscreen",callImage)
call.scale=2
call.visible=false

police=createSprite(191,26,40,40)
police.addImage("police",policeImage)
police.scale=0.6

ambulance=createSprite(191,83,40,40)
ambulance.addImage("ambulance",ambulanceImage)
ambulance.scale=0.6

bloodbank=createSprite(191,136,40,40)
bloodbank.addImage("bloodbank",bloodbankImage)
bloodbank.scale=0.6

childhelpline=createSprite(190,190,40,40)
childhelpline.addImage("childhelpline",childhelplineImage)
childhelpline.scale=0.6

railalert=createSprite(217,246,40,40)
railalert.addImage("railalert",railalertImage)
railalert.scale=0.6

womenhelpline2=createSprite(191,296,40,40)
womenhelpline2.addImage("womenhelpline2", womenhelpline2Image)
womenhelpline2.scale=0.6

corona=createSprite(143,340,40,40)
corona.addImage("corona",coronaImage)
corona.scale=0.1

coronanumber=createSprite(300,330,40,40)
coronanumber.addImage("coronanumber",coronanumberImage)
coronanumber.scale=0.5

findme=createSprite(219,26,40,40)
findme.addImage("findme",findmeImage)
findme.scale=1.5

globe=createSprite(200,300)
globe.addImage("locations",globeImage)
globe.scale=0.5
globe.visible=false



} 

function draw() {
  background("red")

  this.button.position(180,350,50,50)
  this.hello.position(20,350,100,50)
  this.back.position(183,380,40,40)

  if (gameState===PLAY){
    this.back.hide()

    back.visible=false
    police.visible=false
    ambulance.visible=false
    bloodbank.visible=false
    childhelpline.visible=false
    railalert.visible=false
    corona.visible=false
    womenhelpline2.visible=false
    coronanumber.visible=false
    this.button.mousePressed(()=>{
      gameState=START
    })
    this.hello.mousePressed(()=>{
      gameState=END
    })
    
  }


  if(gameState===START){
    call.visible=true
  
    this.back.show()
    this.button.hide()
    this.hello.hide()

   back.visible=true
   home.visible=false
   police.visible=true
   ambulance.visible=true
   bloodbank.visible=true
   childhelpline.visible=true
   railalert.visible=true
   womenhelpline2.visible=true
   corona.visible=true
   coronanumber.visible=true
   findme.visible=false

   background("black")

  

   this.back.mousePressed(()=> {
    this.button.show()
    this.hello.show()
    call.visible=false

      home.visible=true
      gameState=PLAY
      home.changeImage("firstscreen",homeImage)
      background("white")
      findme.visible=true
    })
  }

  

  if(gameState===END){
    globe.visible=true
    
   
     navigator.geolocation.getCurrentPosition(

    
      function(position) {
        
        textSize(30)
        stroke("white")
        fill("red")
        text("latitude: " + position.coords.latitude, 5, 100);
        text("longitude: " + position.coords.longitude, 5, 150);
      }
       
);



    this.back.show()
    this.button.hide()
    this.hello.hide()

    home.visible=false
    back.visible=true

    findme.visible=false

    background("skyblue")
    text("YOUR LOCATION",80,30)
    this.back.mousePressed(()=> {
      globe.visible=false
     this.button.show()
    this.hello.show()
    
      gameState=PLAY
      home.changeImage("firstscreen",homeImage)
      background("white")
      home.visible=true

      findme.visible=true
    })
  }

  drawSprites()
 
}

	
  function sendEmail() {    
Email.send({
	Host: "smtp.gmail.com",
	Username : "testemailkr23@gmail.com",
	Password : "testemailkr",
	To : "testemailkr23@gmail.com",
	From : "testemailkr23@gmail.com",
	Subject : "testing mail",
	Body : "hi test ",
	}).then(
		message => alert("mail sent successfully")
  );
  }
