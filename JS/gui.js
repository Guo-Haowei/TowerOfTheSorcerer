var hero = {
    hp: 1000, 
    offence: 10, 
    defence: 10,
    yellow_key: 1,
    blue_key: 1,
    red_key: 1,
    
    expected_damage: function(monster) {
        var HP = this.hp, OFF = this.offence, DEF = this.defence;
        var HP2 = monster.hp, OFF2 = monster.off, DEF2 = monster.def;
        if (OFF <= DEF2) {return -1;}
        if (DEF >= OFF2) {return 0;}
        var turn = true;
        while (HP > 0 && HP2 > 0) {
            if (turn) {HP2 -= (OFF - DEF2);}
            else {HP -= (OFF2 - DEF);}
            turn = !turn;
        }
        if (HP > 0) {
            return this.hp - HP;
        } else {
            return -1;
        }
    },
    
    battle: function(hp_cost) {

	 if (hp_cost >= this.hp) return -1;
        else {
            this.hp -= hp_cost;
        }
    },
    
    item: function(type) {
        switch (type) {
            case 400:
                this.offence += 10;
                break;
            case 401: 
                this.offence += 30;
                break;
            case 402:
                this.offence += 50;
                break;
            case 403: 
                this.offence += 85;
                break;
            case 404:
                this.offence += 105;
                break;
            case 410:
                this.defence += 10;
                break;
            case 411: 
                this.defence += 30;
                break;
            case 412:
                this.defence += 50;
                break;
            case 413: 
                this.defence += 85;
                break;
            case 414:
                this.defence += 105;
                break;
            case 420:
                ++this.yellow_key;
                break;
            case 421: 
                ++this.blue_key;
                break;
            case 422:
                ++this.red_key;
                break;
            case 425:
                if (this.yellow_key == 0) {
                    cantMoveTo = true;
                    break;
                }
                --this.yellow_key;
                break;
            case 426: 
                if (this.yellow_key == 0) {
                    cantMoveTo = true;
                    break;
                }
                --this.blue_key;
                break;
            case 427:
                if (this.yellow_key == 0) {
                    cantMoveTo = true;
                    break;
                }
                --this.red_key;
                break;
            case 430:
                this.offence += 3;
                break;
            case 431: 
                this.defence += 3;
                break;
            case 432:
                this.hp += 300;
                break;
            case 433: 
                this.hp += 500;
                break;
            default:
                break;
        }
    }
}


// detect keyboard events

// missing gold and exp
function Monster(HP, OFF, DEF, TYPE, SPRITE) {
    this.hp = HP;
    this.off = OFF;
    this.def = DEF;
    this.type = TYPE;
    this.sprite = SPRITE; // sprite is an array of sprite
}

var Green_Slime = new Monster(10, 20, 2, 100, green_s);
var Red_Slime = new Monster(10, 20, 2, 101, r_s);
var Big_Slime = new Monster(10, 20, 2, 102, b_s);
var Slime_Lord = new Monster(10, 20, 2, 103, s_l);
var Slimeman = new Monster(10, 20, 2, 104, slimeman);
var Elite_Slimeman = new Monster(10, 20, 2, 105, e_s);
var Bat = new Monster(35, 20, 2, 110, bat);
var Big_Bat = new Monster(35, 20, 2, 111, b_b);
var Vampire_Bat = new Monster(35, 20, 2, 112, v_b);
var Elite_Bat = new Monster(35, 20, 2, 113, e_b);
var Skeleton = new Monster(10, 20, 2, 120, skeleton);
var Skeleton_Knight = new Monster(10, 20, 2, 121, s_k);
var Yellow_Skeleton_Knight = new Monster(10, 20, 2, 122, y_s_k);
var Elite_Skeleton_Knight = new Monster(10, 20, 2, 123, e_s_k);
var Perist = new Monster(10, 20, 2, 130, perist);
var Yellow_Perist = new Monster(10, 20, 2, 131, y_p);
var Red_Perist = new Monster(10, 20, 2, 132, r_p);
var Magician = new Monster(10, 20, 2, 133, magician);
var Red_Magician = new Monster(10, 20, 2, 134, s_m);
var Zombie = new Monster(30, 300, 0, 140, zombie);
var Zombie_Knight = new Monster(10, 20, 2, 141, z_k);
var Elite_Zombie_Knigth = new Monster(30, 300, 0, 142, e_z_k);
/*
var Green_Slime = new Monster(10, 20, 2, 100, green_s);
var Red_Slime = new Monster(10, 20, 2, 101, r_s);
var Big_Slime = new Monster(10, 20, 2, 102, b_s);
var Slime_Lord = new Monster(10, 20, 2, 103, s_l);
var Slimeman = new Monster(10, 20, 2, 104, slimeman);
var Elite_Slimeman = new Monster(10, 20, 2, 105, e_s);
var Bat = new Monster(35, 20, 2, 110, bat);
var Big_Bat = new Monster(35, 20, 2, 111, b_b);
var Vampire_Bat = new Monster(10, 20, 2, 111, v_b);
var Zombie = new Monster(30, 300, 0, 140, zombie);
*/
function getMonsterByIndex(type) {
    if (type == 100) {
        return Green_Slime;
    } else if (type == 101) {
        return Red_Slime;
    } else if (type == 102) {
        return Big_Slime;
    } else if (type == 103) {
        return Slime_Lord;
    } else if (type == 104) {
        return Slimeman;
    } else if (type == 105) {
        return Elite_Slimeman;
    } else if (type == 110) {
        return Bat;
    } else if (type == 111) {
        return Big_Bat;
    } else if (type == 112) {
        return Vampire_Bat;
    } else if (type == 113) {
        return Elite_Bat;
    } else if (type == 120) {
        return Skeleton;
    } else if (type == 121) {
        return Skeleton_Knight;
    } else if (type == 122) {
        return Yellow_Skeleton_Knight;
    } else if (type == 123) {
        return Elite_Skeleton_Knight;
    } else if (type == 130) {
        return Perist;
    } else if (type == 131) {
        return Yellow_Perist;
    } else if (type == 132) {
        return Red_Perist;
    } else if (type == 133) {
        return Magician;
    } else if (type == 134) {
        return Red_Magician;
    } else if (type == 140) {
        return Zombie;
    } else if (type == 141) {
        return Zombie_Knight;
    } else if (type == 142) {
        return Elite_Zombie_Knigth;
    } else {
        return null;
    }
}





window.addEventListener( "keydown", this.check, true);

var upvalid = false, downvalid = false, leftvalid = false, rightvalid = false, entervalid = false;
var playerX = 5, playerY = 0, newX, newY, moving = false;

var playerDir = 2;
var playerTimer = 0;
function setPlayerPos(x, y) {
    playerX = x;
    playerY = y;
}

function xyToIndex(x, y) {
    if (x < 0 || y < 0 || x > 10 || y > 10) {
        return -1;
    } else {
        return y*11+x;
    }
}

var running = true, cantMoveTo = false;

function changeGameState(index, type) {
    var x = index % 11;
    var y = Math.floor(index / 11);
    if (index < 0 || index >= 121) {return;}
    
    if (type < 100 && (type == TOT.WALL1 || type == TOT.LAVA || type == TOT.VOID1 || type == TOT.REMOVE_LAVA || type == TOT.REMOVE_TILE || type == TOT.REMOVE_WALL)) {
        cantMoveTo = true;
        // up, down, remove lava/wall
    } else if (type == TOT.UP && floor < tower.length) { 
        ++floor;
        playerX = x;
        playerY = y;
        cantMoveTo = true;
    } else if (type == TOT.DOWN && floor > 0) {
        --floor;
        playerX = x;
        playerY = y;
        cantMoveTo = true;
    } else if (type >= 300 && type < 400) { // gaia
        running = false;
        cantMoveTo = true;
        console.log("press enter to continue");
    } else if (type >= 400) { // items
        hero.item(type);
        tower[floor][index] = 0;
    } else if (type >= 100 && type < 300) { // battle
        var a_monster = getMonsterByIndex(type);
        var e_d = hero.expected_damage(a_monster);
        if (e_d == -1) {
            cantMoveTo = true;
            return;
        }
        else {
            hero.battle(e_d);
            tower[floor][index] = 0;
        }
        tower[floor][index] = 0;
        if (type == TOT.DRAGON || type == TOT.OCTOPUS) {
            tower[floor][index-12] = 0;
            tower[floor][index-11] = 0;
            tower[floor][index-10] = 0;
            tower[floor][index-1] = 0;
            tower[floor][index+1] = 0;
            tower[floor][index+10] = 0;
            tower[floor][index+11] = 0;
            tower[floor][index+12] = 0;
        }
    }
}

function check(e) {
    if (!running && e.keyCode != 13) {return;}
    var index, type;
    if (e.keyCode == 38 && playerTimer == 0) {
        index = xyToIndex(playerX, playerY-1);
        type = tower[floor][index];
        changeGameState(index, type);
        if (index >= 0 && index < 121 && !cantMoveTo) {
            playerDir = 0;
            moving = true;
            newX = playerX;
            newY = playerY-1;
        } else {
            moving = false;
        }
    } else if (e.keyCode == 40 && playerTimer == 0){
        index = xyToIndex(playerX, playerY+1);
        type = tower[floor][index];
        changeGameState(index, type);
        if (index >= 0 && index < 121 && !cantMoveTo) {
            playerDir = 2;
            moving = true;
            newX = playerX;
            newY = playerY+1;
        } else {
            moving = false;
        }
    } else if (e.keyCode == 37 && playerTimer == 0){
        index = xyToIndex(playerX-1, playerY);
        type = tower[floor][index];
        changeGameState(index, type);
        if (index >= 0 && index < 121 && !cantMoveTo) {
            playerDir = 3;
            moving = true;
            newX = playerX-1;
            newY = playerY;
        } else {
            moving = false;
        }
    } else if (e.keyCode == 39 && playerTimer == 0){
        index = xyToIndex(playerX+1, playerY);
        type = tower[floor][index];
        changeGameState(index, type);
        if (index >= 0 && index < 121 && !cantMoveTo) {
            playerDir = 1;
            moving = true;
            newX = playerX+1;
            newY = playerY;
        } else {
            moving = false;
        }
    } else if (e.keyCode == 13){
        running = true;
        console.log('enter');
    } // some more keys
    cantMoveTo = false;
}
