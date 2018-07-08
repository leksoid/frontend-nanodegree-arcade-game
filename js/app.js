class Enemy {
    constructor(x,y){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
    }
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update(dt){
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 90, this.y * 70);
    }
}

class Player {
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.x = 2;
        this.y = 6;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 90, this.y * 70);
    }
}

let allEnemies = [];
const bugOne = new Enemy(0,1);
const bugTwo = new Enemy(0,2);
const bugThree = new Enemy(0,3);
allEnemies.push(bugOne);
allEnemies.push(bugTwo);
allEnemies.push(bugThree);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
