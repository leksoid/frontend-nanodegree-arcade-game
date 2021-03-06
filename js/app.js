const modal = document.getElementById('myModal');

class Enemy {
    constructor(x,y,speedFactor){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speedFactor = speedFactor;
    }

    //update the object of Enemy, increase speed based on dt and speedFactor, reset the location 
    //when leaves the screen
    update(dt){
        if(this.x > 5){
            this.reset();
        } else {
            this.x += dt*this.speedFactor;
            this.checkCollisions();
        }
    }

    //check if objects of Enemy and Player occupy close space, 
    //if yes, Player loses and goes to initial position
    checkCollisions(){
        if(this.y >= player.y - 0.5 && this.y <= player.y + 0.5){
            if(this.x >= player.x - 0.5 && this.x <= player.x + 0.5){
                player.reset();
            }
        }
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    //resets Enemy, changing the speed 
    reset(){
        if(this.speedFactor > 5){
            this.speedFactor = Math.floor(2+Math.random());
        }        
        this.speedFactor += Math.random();
        this.x = -Math.floor(1+Math.random()*4);
    }
}

class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 2;
        this.y = 4.8;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }

    //based on Key pressed move the Player on screen, but not off it
    handleInput(input){
        switch(input) {
            case 'up':
                this.y = this.y > 0 ? this.y -= 1 : this.y;
                break;
            case 'down':
                this.y = this.y > 4 ? this.y : this.y += 1;
                break;
            case 'left':
                this.x = this.x > 0 ? this.x -= 1 : this.x;
                break;
            case 'right':
                this.x = this.x > 3 ? this.x : this.x += 1;
                break;
            default:
                break;
        }
    }

    reset(){
        this.x = 2;
        this.y = 4.8;
    }

    update(){
        if(this.y < 0){
            this.victory();
            this.reset();
        }
    }

    //display the modal
    victory(){
        modal.style.display = "block";
    }
}

let allEnemies = [];
const bugOne = new Enemy(-1,0.75,3);
const bugTwo = new Enemy(-2,1.75,3);
const bugThree = new Enemy(-4,2.75,3);
allEnemies.push(bugOne);
allEnemies.push(bugTwo);
allEnemies.push(bugThree);
const player = new Player();

function closeModal(){
    modal.style.display = "none";
    allEnemies.forEach(enemy=>enemy.reset());
}

function resetAllEntities(){
    closeModal();
    player.reset();
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
