var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["914958bd-427e-4e2e-a782-8202dbb6a865","257ad71d-6b29-47e7-8cbd-92c1f22f091d"],"propsByKey":{"914958bd-427e-4e2e-a782-8202dbb6a865":{"name":"win","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":".TqJmgSdijQ5lAAYZ928UPTSa3qrfgrl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/914958bd-427e-4e2e-a782-8202dbb6a865.png"},"257ad71d-6b29-47e7-8cbd-92c1f22f091d":{"name":"a","sourceUrl":"assets/api/v1/animation-library/gamelab/4phLTHjHz6LTATVviIO56W0iUSonnkZ3/category_backgrounds/texture_12.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4phLTHjHz6LTATVviIO56W0iUSonnkZ3","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4phLTHjHz6LTATVviIO56W0iUSonnkZ3/category_backgrounds/texture_12.png"}}};
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

function draw() {
  drawSprites();
  
  textSize(30);
  stroke("white");
  text("Pontos:"+pontos,250,25);
  
  if(estadodoJogo=="inicio"){
    if(keyDown("enter")){
    estadodoJogo="jogando";
    bola.velocityY=4;
    bola.velocityX=5;
    }
    textSize(30);
    text("Pressione Enter Para Jogar",15,200);
  }
    if(estadodoJogo=="jogando"){
      raquete.x=World.mouseX;
      if(pontos==16){
      estadodoJogo="fim";
  }}
    if(estadodoJogo=="fim"){
      bola.velocityX=0;
      bola.velocityY=0;
      var end=createSprite(200,200);
      end.setAnimation("win");
    }
  createEdgeSprites();
  bola.bounceOff(topEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  
  if(bola.isTouching(cx1)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx1);
    pontos++;
    cx1.destroy();
  }
  if(bola.isTouching(cx2)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx2);
    pontos++;
    cx2.destroy();
  }
  if(bola.isTouching(cx3)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx3);
    pontos++;
    cx3.destroy();
  }
  if(bola.isTouching(cx4)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx4);
    pontos++;
    cx4.destroy();
  }
  if(bola.isTouching(cx5)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx5);
    pontos++;
    cx5.destroy();
  }
  if(bola.isTouching(cx6)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx6);
    pontos++;
    cx6.destroy();
  }
  if(bola.isTouching(cx7)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx7);
    pontos++;
    cx7.destroy();
  }
  if(bola.isTouching(cx8)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx8);
    pontos++;
    cx8.destroy();
  }
  if(bola.isTouching(cx9)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx9);
    pontos++;
    cx9.destroy();
  }
  if(bola.isTouching(cx10)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx10);
    pontos++;
    cx10.destroy();
  }
  if(bola.isTouching(cx11)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx11);
    pontos++;
    cx11.destroy();
  }
  if(bola.isTouching(cx12)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx12);
    pontos++;
    cx12.destroy();
  }
  if(bola.isTouching(cx13)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx13);
    pontos++;
    cx13.destroy();
  }
  if(bola.isTouching(cx14)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx14);
    pontos++;
    cx14.destroy();
  }
  if(bola.isTouching(cx15)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx15);
    pontos++;
    cx15.destroy();
  }
  if(bola.isTouching(cx16)){
    playSound("assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3");
    bola.bounceOff(cx16);
    pontos++;
    cx16.destroy();
  }
  if(bola.isTouching(raquete)){
    playSound("assets/category_hits/vibrant_next_page_button.mp3");
    bola.bounceOff(raquete);
  }
}
var fundo=createSprite(200,200);
fundo.setAnimation("a")

var raquete=createSprite(200,375,50,15);
raquete.shapeColor="red";
var bola=createSprite(150,250,20,20);
bola.shapeColor="orange";

var pontos=0;

var cx1=createSprite(25,75,50,50);
cx1.shapeColor="red";
var cx2=createSprite(75,75,50,50);
cx2.shapeColor="blue";
var cx3=createSprite(125,75,50,50);
cx3.shapeColor="red";
var cx4=createSprite(175,75,50,50);
cx4.shapeColor="blue";
var cx5=createSprite(225,75,50,50);
cx5.shapeColor="red";
var cx6=createSprite(275,75,50,50);
cx6.shapeColor="blue";
var cx7=createSprite(325,75,50,50);
cx7.shapeColor="red";
var cx8=createSprite(375,75,50,50);
cx8.shapeColor="blue";

var cx9=createSprite(25,125,50,50);
cx9.shapeColor="blue";
var cx10=createSprite(75,125,50,50);
cx10.shapeColor="red";
var cx11=createSprite(125,125,50,50);
cx11.shapeColor="blue";
var cx12=createSprite(175,125,50,50);
cx12.shapeColor="red";
var cx13=createSprite(225,125,50,50);
cx13.shapeColor="blue";
var cx14=createSprite(275,125,50,50);
cx14.shapeColor="red";
var cx15=createSprite(325,125,50,50);
cx15.shapeColor="blue";
var cx16=createSprite(375,125,50,50);
cx16.shapeColor="red";
var estadodoJogo="inicio";
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
