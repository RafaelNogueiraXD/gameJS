function Sprite(img,canvas){
    // Atributos
    this.moveEsquerda = false, this.moveDireita = false, this.moveCima = false, this.moveBaixo = false;
    this.srcX = 17;
    this.srcY = 13;
    this.width = 80;
    this.height = 82;
    this.posX = canvas.width/2 - this.width ;
    this.posY = canvas.height/2 -  this.height;
    this.img = img;
    this.velocidade = 10;
    this.countAnim = 0;
    // Metodos
    this.draw = function(ctx){
        this.animation();
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,
            this.posX,this.posY,this.width*1.5,this.height*1.5);
            // this.repouso();
        }
    this.move = function(){
        if(this.moveEsquerda){
            this.posX -= this.velocidade;
            this.srcX = this.width * 4 ;
        } else
            if(this.moveDireita){
                this.posX += this.velocidade;
                this.srcX = this.width * 4 ;
             } else
            if(this.moveCima){
                this.posY -= this.velocidade;
                this.srcX = this.width * 4 ;
             } else
            if(this.moveBaixo){
                this.posY += this.velocidade;
                this.srcX = this.width * 4 ;
             }
    }
    this.animation = function(){
        if(this.moveEsquerda || this.moveDireita || this.moveBaixo || this.moveCima){
            this.velocidade = 7;
            this.countAnim++;
            if(this.countAnim >= 24){
                this.countAnim = 0;
            }
            this.srcX = Math.floor(2 + this.countAnim/4)*this.width ;
            // console.log(this.countAnim);

        }  else {
            this.velocidade = 4;
            this.countAnim++;
            if(this.countAnim >= 80){
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim/20)*this.width ;
           
		}
        
    }
   this.parede = function(canvas){
        if(this.posX < 0 || this.posX + this.width > 1400 || this.posY < 0 || this.posY + this.height > canvas.height - (this.height -50)){
            // corPlayer = "red";
            this.posX = canvas.width/2 - this.width ;
            this.posY = canvas.height/2 -  this.height;
            // cancelAnimationFrame(a);
           
        }
    }
}