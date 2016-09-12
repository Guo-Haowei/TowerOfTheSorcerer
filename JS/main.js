var size = 48;
var canvas, ctx, width = size * 21, height = size * 13, floor = 2;
var timer = 0, timer2 = 0;
function main() {
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");        document.body.appendChild(canvas); 
    
    var img = new Image();
    img.onload = function() {
        initSprites(this);
        run();
    }
    img.src = "sprite.png";
}
    
var SB = 6;

function run() {
    var loop = function() {
        update();
        render();
        window.requestAnimationFrame(loop, canvas);
        
        // timer for other units
        ++timer;
        if (timer == 26) {timer = 0;} //26
        timer2 = Math.floor(timer/13);
        
        // timer for player.
        if (moving) ++playerTimer;
        if (playerTimer == SB) {
            playerTimer = 0;
            playerX = newX;
            playerY = newY;
            moving = false;
        }
    }
    window.requestAnimationFrame(loop, canvas);
}
    
function update() {
    //...
}
        
function draw_help(ctx, x, y, sprite) {
    sprite.draw(ctx, (x+5)*size, (y+1)*size);
}

function drawPlayer() {
    if (!moving) {
        if (playerDir == 0) {
            draw_help(ctx, playerX, playerY, player_b0);
        } else if (playerDir == 1) {
            draw_help(ctx, playerX, playerY, player_r[0]);
        } else if (playerDir == 2) {
            draw_help(ctx, playerX, playerY, player_f0);
        } else if (playerDir == 3) {
            draw_help(ctx, playerX, playerY, player_l[0]);
        } 
    } else {
        var playerTimer2 = 1-Math.floor(playerTimer*2/SB);
        var para = playerTimer/SB; 
        if (playerDir == 0) {
            draw_help(ctx, playerX, playerY-para, player_b[playerTimer2]);
        } else if (playerDir == 1) {
            draw_help(ctx, playerX+para, playerY, player_r[playerTimer2]);
        } else if (playerDir == 2) {
            draw_help(ctx, playerX, playerY+para, player_f[playerTimer2]);
        } else if (playerDir == 3) {
            draw_help(ctx, playerX-para, playerY, player_l[playerTimer2]);
        } 
    }
}

var battle_with = 0;

function text() {
    ctx.font="80px Georgia";
    ctx.fillText(hero.hp.toString(),2*size,3*size);
}

/*function battling() {
    if (battle_with != 0) {
        
    }
}*/

function render() {
    ctx.clearRect(0, 0, width, height);
    var background = new Image();
    var src_str = "map/tower" + floor + ".png";
    background.src = src_str;
    var pat=ctx.createPattern(background, "repeat");
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = pat;
    ctx.fill();
    /*draw_help(ctx, 3, 1, perist[timer2]);
    draw_help(ctx, 0, 0, skeleton[timer2]);
    draw_help(ctx, 0, 2, s_k[timer2]);
    draw_help(ctx, 0, 10, s_l[timer2]);
    draw_help(ctx, 9, 10, zombie[timer2]);
    draw_help(ctx, 5, 5, v_b[timer2]);
    draw_help(ctx, 10, 7, magician[timer2]);*/
    draw_map();
    drawPlayer();
    text();
}
main();