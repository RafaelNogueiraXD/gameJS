var inimigo1 = [];
   
var inimigoSprite = new Image();
inimigoSprite.src = "./img/Kunais2.png";
var canvas = $("#cnv")[0];
var ctx = canvas.getContext("2d");
function KunaiInimigos(){
    inimigo1.push({
    srcX:0,
    srcY:0,
    width:45,
    height:60,
    // posX = posY = 100,   
    posX:canvas.width-100,
    posY:canvas.height-100,
    img:inimigoSprite,
    velocidade:7,
    countAnim:0,
    posicaoKunai:function(x){
        switch(x){
            case 1:
                this.srcX = 0;
                this.srcY = 0;
            break;
            case 2:
                this.srcX = width*1.5;
                this.srcY = 0;
            break;
            case 3:
                this.srcX = 134;
                this.width = 160;
                this.height = 45;
                this.srcY = 12;
            break;
            case 4:
                this.srcX = 297;
                this.width = 160;
                this.height = 45;
                this.srcY = 12;
            break;
        }
    },

    drawIni:function(){
        this.posicaoKunai(3);
    
        // console.log(srcX),
        ctx.drawImage(inimigoSprite,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width/1.5,this.height/1.5);
       // ctx.drawImage(inimigoSprite,10,20,30,40,50,60,10,10);
        //ctx.drawImage(inimigoSprite, this.srcX,this.srcY);
    },
    getRandomInt:function(min, max){
        // function getRandomInt() {
            min = Math.ceil(min);
            max = Math.floor(max);
            var speed =  (Math.floor(Math.random() * (max - min)) + 1);
            return speed;
    },
    movimentaInimigo:function(){
        switch(getRandomInt(1,5)%2){
            case 1:
                switch(getRandomInt(1,5)){
                  case 1:
                      console.log(1);
                  break;
                  case 2:
                      console.log(2);
                  break;
                  case 3:
                      console.log(3);
                  break;
                  case 4:
                      console.log(4);
                  break;
                }
            break;
            case 0:
              switch(getRandomInt(1,5)){
                  case 1:
                      console.log(5);
                  break;
                  case 2:
                      console.log(6);
                  break;
                  case 3:
                      console.log(7);
                  break;
                  case 4:
                      console.log(8);
                  break;
                }
            break;
        }
    },
    atualiza:function(){
        this.posX -= this.velocidade;
    },
  
    });
} 