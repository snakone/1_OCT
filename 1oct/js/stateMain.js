var anim;
var back;
var ground;
var secondGround;
var intro;
var enemies=[];

var StateMain = {
    preload: function () {
        game.load.image('bg', 'images/background2.png');
        game.load.image("secondGround", "images/TopGround.png");
        game.load.image("ground", "images/Ground1.png");
        game.load.spritesheet("hero", "images/Player.png", 16, 16, 3);
        game.load.spritesheet("poli", "images/poli.png", 16, 16, 2);
        game.load.image("cover","images/portada1oct.png");
        game.load.image("block", "images/blockerMad.png");


    },
    create: function () {
     
        back = game.add.tileSprite(0, 0, 640, 432, 'bg');

        back.scale.set(1);
        back.smoothed = false;
        intro=1;

        this.ground = game.add.tileSprite(0, 460, 640, 16, "ground");
        ground = this.ground;

        secondGround = game.add.tileSprite(0, 460 - 32, 640, 32, "secondGround");



        this.hero = game.add.sprite(52, 500, 'hero', 3);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.enable(this.hero, Phaser.Physics.ARCADE);
        game.physics.enable(this.ground, Phaser.Physics.ARCADE);
        this.hero.body.collideWorldBounds = true;






        //hero = game.add.sprite(200, 360, 'hero', 3);
        this.hero.scale.set(2);

        this.hero.y = 400;
        this.hero.smoothed = false;
        anim = this.hero.animations.add('walk');



        anim.play(10, true);

        game.physics.enable(this.ground, Phaser.Physics.ARCADE);
        this.ground.body.immovable = true;
        this.ground.body.collideWorldBounds = true;
        this.hero.body.gravity.y = 500;
        //this.startY = this.hero.y;
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);


        aliens = game.add.group();
        aliens.enableBody = true;
        aliens.physicsBodyType = Phaser.Physics.ARCADE;

        if (intro==1){
            var text = "- While Zuckerberg sells your data \n and la guardia civil reads your tweets, \n please have a game.";
            var style = { font: "25px Arial", fill: "#ff0044", align: "center" };
        
            var t = game.add.text(game.world.centerX-300, 50, text, style);
        }; 
    },
    poliCreator: function () {
        this.poli = game.add.sprite(900, 432, 'poli', 2);
        this.poli.scale.set(2);
        anim2 = this.poli.animations.add('walk');
        anim2.play(10, true);
        game.physics.enable(this.poli, Phaser.Physics.ARCADE);
       
    },
    doJump: function () {
        this.hero.body.velocity.y = -502;
    },

    update: function () {
        
      
       
        game.physics.arcade.collide(this.hero, this.ground);
        game.physics.arcade.collide(this.hero, this.poli);

        randNum = Math.floor((Math.random() * 200) + 1);
        if (randNum == 7) {
            this.poliCreator();
            this.poli.body.velocity.x = -120;
        };
        if (this.spaceKey.isDown) {
            if (this.hero.y == this.ground.y - 32) {

                this.hero.body.velocity.y = -200;
                intro=0;
            }
        }
        if (this.left.isDown) {


            this.hero.body.velocity.x = -150;
            intro=0;
        }


        else if (this.right.isDown) {


            this.hero.body.velocity.x = 100;
            intro=0;

        } else {
            this.hero.body.velocity.x = 0;
        }
        if (anim.isPlaying) {
            back.tilePosition.x -= 2;
            secondGround.tilePosition.x -= 2;



        }


    },

}