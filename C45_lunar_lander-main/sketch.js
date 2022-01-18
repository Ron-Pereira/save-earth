  let ground;
  let jet, earth;
  let enemy1, enemy2, enemy3;
  let villan;
  var jet_img, earth_img, enemy1_img, enemy2_img, enemy3_img, villan_img;
  var bg;
  var score = 0;

  function preload() {
    jet_img = loadImage("jet_img.png");
    earth_img = loadImage("earth.png");
    enemy1_img = loadImage("enemy_ship.png");
    enemy2_img = loadImage("enemy_ship.png");
    enemy3_img = loadImage("enemy_ship.png");
    villan_img = loadImage("villan_ship.png")
    bg = loadImage("bg.jpg");
  }

  function setup() {
    createCanvas(1535.5, 717.9);
    frameRate(80);

    jet = createSprite(600, 350, 40, 40);
    jet.addImage(jet_img);
    jet.scale = 0.08;

    jet.velocityX = 0;
    jet.velocityY = 0;

    enemy1 = createSprite(1100, 90, 40, 40);
    enemy1.addImage(enemy1_img);
    enemy1.scale = 0.21;

    enemy2 = createSprite(1420, 350, 40, 40);
    enemy2.addImage(enemy2_img);
    enemy2.scale = 0.21;

    enemy3 = createSprite(1100, 615, 40, 40);
    enemy3.addImage(enemy3_img);
    enemy3.scale = 0.21;

    villan = createSprite(1180, 350, 40, 40);
    villan.addImage(villan_img);
    villan.scale = 0.2;

    earth = createSprite(250, 350, 40, 40);
    earth.addImage(earth_img);
    earth.scale = 0.6;

    rectMode(CENTER);
    textSize(15);
  }

  function draw() {
    background(bg);
    //image(bg_img,0,0);
    //push()
    //fill(255);
    //pop();
    jet.velocityX = 0;
    jet.velocityY = 0;


    if (keyDown ("UP")) {
      jet.velocityX = 0;
      jet.velocityY = -5;
    }

    if (keyDown ("DOWN")) {
      jet.velocityX = 0;
      jet.velocityY = 5;
    }



    drawSprites();
  }