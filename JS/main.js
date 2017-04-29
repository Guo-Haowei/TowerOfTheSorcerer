var size = 48;
var canvas, ctx, width = size * 21, height = size * 13, floor = 2;
var timer2 = 0;
function main() {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");       
	document.body.appendChild(canvas); 
    ctx.font='40px Georgia'
    var img = new Image();
    img.onload = function() {
        initSprites(this);
		load_map();
    }
    img.src = "sprite.png";
}


function run() {
        if (moving){
            playerX = newX;
            playerY = newY;
            moving=false;
        }

        update();
		render();
       
        // timer2 for monster animation
        timer2 = 1-timer2;
        
        // timer for player.
		window.setTimeout(run,500);

}
    
function update() {
    //update for future usage
}
        
function draw_help(ctx, x, y, sprite) {
    sprite.draw(ctx, (x+5)*size, (y+1)*size);
}

function drawPlayer() {
        if (playerDir == 0) {
            draw_help(ctx, playerX, playerY, player_b0);
        } else if (playerDir == 1) {
            draw_help(ctx, playerX, playerY, player_r[0]);
        } else if (playerDir == 2) {
            draw_help(ctx, playerX, playerY, player_f0);
        } else if (playerDir == 3) {
            draw_help(ctx, playerX, playerY, player_l[0]);
        } 
    
}

var battle_with = 0;

function drawText(given_text,x,y) {
    ctx.fillText(given_text,x*size,(y-0.3)*size);

	}

function load_map(){
	    ctx.clearRect(0, 0, width, height);
    var background = new Image();
    var src_str = "map/tower" + floor + ".png";
    background.src = src_str;
	background.onload = function(){
    ctx.drawImage(background,0,0);
	run();
	};
 }
 function renew_player_state(){
	tile.draw(ctx, 2*size, 3*size);
	tile.draw(ctx, 3*size, 3*size);			
	tile.draw(ctx, 2*size, 4*size);
	tile.draw(ctx, 2*size, 5*size);
	tile.draw(ctx, 3*size, 8*size);
	tile.draw(ctx, 3*size, 9*size);
	tile.draw(ctx, 3*size, 10*size);
    drawText(hero.hp.toString(),2,4);
    drawText(hero.offence.toString(),2,5);
    drawText(hero.defence.toString(),2,6);
    drawText(hero.yellow_key.toString(),3,9);
    drawText(hero.blue_key.toString(),3,10);
    drawText(hero.red_key.toString(),3,11);
 }
function render() {
    draw_map();//draw monsters and people on the map
    drawPlayer();
	renew_player_state();
}
main();