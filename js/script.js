$().ready(() =>{
    var UP = 87, DOWN = 83, LEFT = 65, RIGHT = 68 ;

     var confirma = false;
    var canvas = $("#cnv")[0];
    var ctx = canvas.getContext("2d");
    
    var spriteSheet = new Image();
    spriteSheet.src = "img/rudolf/Camada3.png";
    var personagem = new Sprite(spriteSheet,canvas);
    //para game
    var Paragame = 0;
    tempo1 = 1;
    //inimigo
    var inimigoSprite = new Image();
    inimigoSprite.src = "./img/Kunais2.png";
    var inimigo1 = [];
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
        velocidade:5,
        countAnim:0,
        countKunai:0,
        KunaiLateral:0,
        posicaoKunai:function(x){
            switch(x){
                case 1:
                    this.srcX = 0;
                    this.srcY = 0;
                    this.width = 60;
                    this.height = 165;
                break;
                case 2:
                    this.srcX = 82;
                    this.srcY = 0;
                    this.width = 33;
                    this.height = 165;
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
            // this.posicaoKunai(3);
            // console.log(srcX),
            ctx.drawImage(inimigoSprite,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width/1.5,this.height/1.5);
           // ctx.drawImage(inimigoSprite,10,20,30,40,50,60,10,10);
            //ctx.drawImage(inimigoSprite, this.srcX,this.srcY);
        },
        getRandomInt:function(min, max){
            // function getRandomInt() {
             
                min = Math.ceil(min);
                max = Math.floor(max);
                var speed =  (Math.floor(Math.random() * (max - min)) + min);
                return speed;
        },
        movimentaInimigo:function(){
            if(this.countKunai == 0){
                switch(this.getRandomInt(1,5)%2){
                    //horinzontal
                    case 1:
                        switch(this.getRandomInt(1,5)){
                          case 1:
                            this.posicaoKunai(3);
                            this.posX = canvas.width-30;
                            this.posY = this.getRandomInt(1,208);
                            this.countKunai = 1;
                            this.KunaiLateral = 0 ;
                          break;
                          case 2:
                            this.posicaoKunai(3);

                            this.posX = canvas.width-30;
                            this.posY = this.getRandomInt(208,416);
                            this.countKunai = 1;
                            this.KunaiLateral =0;

                          break;
                          case 3:   
                            this.posicaoKunai(3);

                          this.posX = canvas.width-30;
                          this.posY = this.getRandomInt(416,624);
                          this.countKunai = 1;
                          this.KunaiLateral =0;

                          break;
                          case 4:
                            this.posicaoKunai(3);
                            this.posX = canvas.width-30;
                            this.posY = this.getRandomInt(624,832);
                            this.countKunai = 1;
                            this.KunaiLateral = 0;
                        break;
                        }
                    break;
                    case 0:
                        //vertical
                      switch(this.getRandomInt(1,5)){
                        case 1:
                            this.posicaoKunai(2);
                            this.posX = this.getRandomInt(1,350);
                            this.posY = -60;
                            this.countKunai = 1;
                            this.KunaiLateral = 1 ; 
                          break;
                          case 2:
                            this.posicaoKunai(2);
                            this.posX = this.getRandomInt(350,700);
                            this.posY = -60;
                            this.countKunai = 1;
                            this.KunaiLateral =1;

                          break;
                          case 3:   
                            this.posicaoKunai(2);

                          this.posX = this.getRandomInt(700,1050);
                          this.posY = -60;
                          this.countKunai = 1;
                          this.KunaiLateral =1;
                          break;
                          case 4:
                            this.posicaoKunai(2);
                            this.KunaiLateral = 1 ; 
                            this.posX = this.getRandomInt(1050,1400);
                            this.posY = -60;
                            this.countKunai = 1;
                        break;
                        }
                    break;
                }
            }
        },
        atualiza:function(){
            if(this.KunaiLateral == 1){
                this.posY += this.velocidade;
            }else{
                this.posX -= this.velocidade;
            }

        },
        dificuldade:function(tempo){
            if(tempo >= 0 && tempo < 4){
                this.velocidade = 6;
            }
            if(tempo >= 5 && tempo < 10){
                this.velocidade = 9;
            }
            if(tempo >= 10 && tempo < 20){
                this.velocidade = 12;
            }
            if(tempo >= 20 ){
                this.velocidade = 14;
            }   
        }
      
        });
    } 
    //mapa
    var scene = new Image();
	scene.src = "img/mapa neve.png";

    addEventListener("keydown",keydownHandler,false);
    addEventListener("keyup",keyupHandler,false);
    function keydownHandler(e){      
        switch(e.keyCode){
            case RIGHT:
                personagem.moveBaixo  = false;
                personagem.moveEsquerda  = false;
                personagem.moveCima = false;
                personagem.moveDireita  = true;
                break;
            case LEFT:
                personagem.moveBaixo  = false;
                personagem.moveEsquerda  = true;
                personagem.moveCima = false;
                personagem.moveDireita  = false;
                break;
            case UP:
                personagem.moveBaixo  = false;
                personagem.moveEsquerda  = false;
                personagem.moveCima = true;
                personagem.moveDireita  = false;
                break;
            case DOWN:
                personagem.moveBaixo  = true;
                personagem.moveEsquerda  = false;
                personagem.moveCima = false;
                personagem.moveDireita  = false;
                break;
        }
    }
    function keyupHandler(e){
        switch(e.keyCode){
            case RIGHT:
                personagem.moveDireita = false;
                break;
            case LEFT:
                personagem.moveEsquerda = false;
                break;
            case DOWN:
                personagem.moveBaixo = false;
                break;
            case UP:
                personagem.moveCima= false;
                break;
        }
    }
    function detectaColisao(comp,inimigo){
        // comp.posX +=40;
        if(comp.posY<inimigo.posY+inimigo.height/2&&comp.posY+comp.height>inimigo.posY&&comp.posX<inimigo.posX+inimigo.width&&comp.posX+comp.width>inimigo.posX){
            return true;
        }
        return false;
    }
    tempo = 0;
    function temporizador(){
        if(Paragame != 1){
            tempo++;
            // console.log(tempo);
        }
    }
    spriteSheet.onload =function(){
        init();
       personagem.posX = (canvas.width/2) - 190;
       personagem.posY = (canvas.height/2) - 80;
    }
    function init(){
        loop();
    }
  
    function update(){
        personagem.parede(canvas);
        personagem.move();
    }
    var qtdInimigo = 1000;
    setInterval(KunaiInimigos,5000);
    setInterval(KunaiInimigos,4000);
    setInterval(KunaiInimigos,2500);
    setInterval(KunaiInimigos,2000);
    setInterval(KunaiInimigos,qtdInimigo);
    setInterval(KunaiInimigos,1500);
    setInterval(temporizador,1000);
    function draw(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
        personagem.draw(ctx);
        for(var i=0;i<inimigo1.length;i++){
           setInterval( inimigo1[i].movimentaInimigo(),2000);
           inimigo1[i].atualiza();
            inimigo1[i].drawIni();
            inimigo1[i].dificuldade(tempo);
            if(detectaColisao(personagem,inimigo1[i])){
                console.log("colisao");
                Paragame =  1;
                tempo1 = 0;
            }
        }
        
        ctx.font = "35px serif";
        ctx.fillStyle = "#000";
        ctx.fillText("Tempo(s): "+ tempo + "   Pontuação:"+(tempo/4)*100,10,50);
        // ctx.fillText("Pontuação: "+ pontos,10,150);

        // inimigo1.desenhaAtualiza();
        
        
    }
    // setInterval(inimigo1.movimentaInimigo(),10000);
    function loop(){
       a =  requestAnimationFrame(loop,canvas);
        update();
        draw();
        if(Paragame == 1 || confirma == true){
            cancelAnimationFrame(a);
            setTimeout(document.location.reload(true),10000);
        }
        if(tempo == 40){
            cancelAnimationFrame(a)
            confirma = true;
            Alert.render("Você conseguiu sobreviver!!!");
        }


    }
});