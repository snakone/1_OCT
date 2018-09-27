var anim;
var back;
var StateMain = {
    preload: function() {
        
        game.load.image("secondGround", "images/TopGround.png");
        game.load.image("ground", "images/Ground1.png");
        game.load.spritesheet("hero", "images/Player.png",16,16,3);
        //game.load.image("bar", "images/powerbar.png");
        game.load.image("block", "images/blockerMad.png");

        //game.load.atlasJSONHash("hero, 'images/Player.png', 'images/player.json');
    },
    create: function() {
        
        //this.power = 0;
        //turn the background sky blue
        game.stage.backgroundColor = "#00ffff";
        //add the ground
        var i=0;
        while (i<20){
        this.ground = game.add.sprite(i*32, game.height-32, "ground");
        var secondGround = game.add.sprite(i*32, game.height-64, "secondGround");
        i++;
        };
        //add the hero in 
        this.hero = game.add.sprite(200, 360, 'hero', 3);
        //add the power bar just above the head of the hero
        //this.powerBar = game.add.sprite(this.hero.x + 25, this.hero.y - 25, "bar");
        //this.powerBar.width = 0;
        //set listeners
       // game.input.onUp.add(this.mouseUp, this);
       // game.input.onDown.add(this.mouseDown, this);
       game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.enable(this.hero, Phaser.Physics.ARCADE);
       this.hero.body.collideWorldBounds = true;
       game.physics.enable(this.ground, Phaser.Physics.ARCADE);
       this.ground.body.immovable = true;
       this.hero.body.gravity.y = 200;
       this.startY = this.hero.y;
       this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


      /* back = game.add.image(0, -400, 'lazur');
       back.scale.set(2);
       back.smoothed = false;*/
   
       //hero = game.add.sprite(200, 360, 'hero', 3);
       this.hero.scale.set(2);
       this.hero.smoothed = false;
       anim = this.hero.animations.add('walk');
   
       //anim.onStart.add(animationStarted, this);
       //anim.onLoop.add(animationLooped, this);
       //anim.onComplete.add(animationStopped, this);
   
       anim.play(10, true);
   

    },
doJump: function() {
        this.hero.body.velocity.y = -42;
    },
    /*mouseDown: function() {
        this.timer = game.time.events.loop(Phaser.Timer.SECOND / 1000, this.increasePower, this);
    },
    mouseUp: function() {
        game.time.events.remove(this.timer);
        this.power = 0;
        this.powerBar.width = 0;
    },
    increasePower: function() {
        this.power++;
        this.powerBar.width = this.power;
        if (this.power > 50) {
            this.power = 50;
        }
    },*/
    update: function() {
        game.physics.arcade.collide(this.hero, this.ground);
        



        if (this.spaceKey.isDown)
        {   if (this.hero.y = this.ground.y -32) {
            
            this.hero.body.velocity.y = -42;
        }
    }
},
 //animationStarted: function(sprite, animation) {

  //  game.add.text(32, 32, 'Animation started', { fill: 'white' });

//}
}