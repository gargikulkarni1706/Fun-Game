var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9dcea6ee-0f82-45a5-8c64-a1bf205549c5","321dd06d-926b-4c3c-bf46-390a6f4546e0","edef0f23-e6cf-4348-b648-2bae0f14dcca","9b3ddcfc-6b39-4ea0-b5c4-34c528fd5830","e710248a-f4ab-4228-8cb1-ddb50a0342b6","1ab793a6-3a18-426e-ade5-9cd40e8af02e","7a0b6429-e03f-485b-a22d-78c553b91132","11c6aeae-43f9-417c-83ff-d87f9c1392d5"],"propsByKey":{"9dcea6ee-0f82-45a5-8c64-a1bf205549c5":{"name":"alienGreen_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gdTc5HV1TJ2r1U1luZqdvpCQ_9JgxTwg/category_characters/alienGreen_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"gdTc5HV1TJ2r1U1luZqdvpCQ_9JgxTwg","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gdTc5HV1TJ2r1U1luZqdvpCQ_9JgxTwg/category_characters/alienGreen_walk.png"},"321dd06d-926b-4c3c-bf46-390a6f4546e0":{"name":"ground","sourceUrl":"assets/v3/animations/P9yIfU5WhudrJBIcHqPRBFLYEYhLSQWmzphIQuzGnyA/321dd06d-926b-4c3c-bf46-390a6f4546e0.png","frameSize":{"x":502,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"N7Ez15a__aDzjfHmqObkuk3W4xFbZLQU","loadedFromSource":true,"saved":true,"sourceSize":{"x":502,"y":100},"rootRelativePath":"assets/v3/animations/P9yIfU5WhudrJBIcHqPRBFLYEYhLSQWmzphIQuzGnyA/321dd06d-926b-4c3c-bf46-390a6f4546e0.png"},"edef0f23-e6cf-4348-b648-2bae0f14dcca":{"name":"bullets1","sourceUrl":"assets/api/v1/animation-library/gamelab/QV5mo1I4fyp1n7BbgK1IfcqZAoU_22vz/category_obstacles/ore_silver.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"QV5mo1I4fyp1n7BbgK1IfcqZAoU_22vz","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QV5mo1I4fyp1n7BbgK1IfcqZAoU_22vz/category_obstacles/ore_silver.png"},"9b3ddcfc-6b39-4ea0-b5c4-34c528fd5830":{"name":"bullets2","sourceUrl":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jAoAQOLwJ3wYD1gl2D6Xgg5AUHkHfPWK/category_obstacles/ore_coal.png"},"e710248a-f4ab-4228-8cb1-ddb50a0342b6":{"name":"bullets3","sourceUrl":"assets/api/v1/animation-library/gamelab/SCuTDATs3CWnD9.mH0Ue5oFTvmdlrzP8/category_obstacles/ore_iron.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"SCuTDATs3CWnD9.mH0Ue5oFTvmdlrzP8","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SCuTDATs3CWnD9.mH0Ue5oFTvmdlrzP8/category_obstacles/ore_iron.png"},"1ab793a6-3a18-426e-ade5-9cd40e8af02e":{"name":"alienGreen_duck_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qPXosckB0VhiThmVvbbvBAky2YD50_Pa/category_characters/alienGreen_duck.png","frameSize":{"x":69,"y":71},"frameCount":1,"looping":true,"frameDelay":2,"version":"qPXosckB0VhiThmVvbbvBAky2YD50_Pa","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":71},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qPXosckB0VhiThmVvbbvBAky2YD50_Pa/category_characters/alienGreen_duck.png"},"7a0b6429-e03f-485b-a22d-78c553b91132":{"name":"alienGreen_2","sourceUrl":"assets/api/v1/animation-library/gamelab/5WQRCkwjpezcyLKVtDmw2T6Zc739lgI6/category_characters/alienGreen.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"5WQRCkwjpezcyLKVtDmw2T6Zc739lgI6","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5WQRCkwjpezcyLKVtDmw2T6Zc739lgI6/category_characters/alienGreen.png"},"11c6aeae-43f9-417c-83ff-d87f9c1392d5":{"name":"again.jpg","sourceUrl":"assets/v3/animations/P9yIfU5WhudrJBIcHqPRBFLYEYhLSQWmzphIQuzGnyA/11c6aeae-43f9-417c-83ff-d87f9c1392d5.png","frameSize":{"x":290,"y":287},"frameCount":1,"looping":true,"frameDelay":4,"version":"P2RYxvfqQZX8jl8YU8x8i1cRZ8zxdjD5","loadedFromSource":true,"saved":true,"sourceSize":{"x":290,"y":287},"rootRelativePath":"assets/v3/animations/P9yIfU5WhudrJBIcHqPRBFLYEYhLSQWmzphIQuzGnyA/11c6aeae-43f9-417c-83ff-d87f9c1392d5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player = createSprite(70, 280 , 10, 10);
player.setAnimation("alienGreen_walk_1");
player.scale = 1.2;

var ground = createSprite(200, 380, 400, 10);
ground.setAnimation("ground");
ground.scale = 1.6;

var inviground = createSprite(200, 335, 400, 10);
inviground.visible = false;

var Bullet = createGroup();

var count = 0;

player.setCollider("rectangle", 0, 0, 5, 80);
player.debug = true;

var again = createSprite(100,90);
again.setAnimation("again.jpg");
again.visible = false;
again.scale = 0.3;

textSize(28);

function draw() {
  background("white");
  text("Score: "+ count, 250, 100);
  
  if (gameState === PLAY) {
    ground.velocityX = -8;
    count = count + Math.round(World.frameRate/50);
    
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
    if (keyDown("UP_ARROW") && player.y >= 180) {
      player.velocityY = -20;
      player.setAnimation("alienGreen_walk_1");
    }
    if (keyWentDown("DOWN_ARROW")) {
     //player.velocityY = 5;
     player.setAnimation("alienGreen_duck_1");
    }
    if (keyWentUp("DOWN_ARROW")) {
      player.setAnimation("alienGreen_walk_1");
    }
    if (Bullet.isTouching(player)) {
      gameState = END;
    }
    player.velocityY = player.velocityY + 1;
    
    spawnBullet();
  }
  
  else if (gameState === END) {
    again.visible = true;
    ground.velocityX = 0;
    player.velocityY = 0;
    Bullet.setVelocityXEach(0);
    
    player.setAnimation("alienGreen_2");
    
  
    Bullet.setLifetimeEach(-1);
    
  }
  
  if (mousePressedOver(again)) {
    reset();
  }
  
  
  player.depth = ground.depth;
  player.depth = player.depth + 1;
  //player.depth = bullets.depth;
  //player.depth = player.depth + 1;
  
  
  player.collide(inviground);
  
  drawSprites();
}

function spawnBullet() {
  if (World.frameCount % 100 === 0) {
  var bullets = createSprite(388, 280, 10, 10);
  //bullets.setAnimation("ore_silver_1");
  var rand = randomNumber(1, 3);
  bullets.setAnimation("bullets" + rand);
  bullets.scale = 0.5;
  
  bullets.velocityX = - (7 + 2*count/100);
  
  bullets.y =randomNumber(250, 315);
  bullets.lifetime = 
  
  Bullet.add(bullets);
  }
}

function reset(){
  gameState = PLAY;
  again.visible = false;
  Bullet.destroyEach();
  player.setAnimation("alienGreen_walk_1");
  count = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
