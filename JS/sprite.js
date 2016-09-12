/*
life, offense, defence


1.green_slime, red_slime, big_slime, slime_lord, far_seer,
2 bat, big_bat, vampire_bat, elite_bat, merchant,
3 skeleton, skeleton_knight, yellow_skeleton_knight, elite_skeleton_knight, thief,
4 perist, yellow_persist, red_persist, magician, superion_magician, 
5 zombie, zombie_knight, elite_zombie_knight, swordsman, superion_swordsman, 
6 golden_knight, blue_knight, knight, gate_guardian, superion_gate_guardian, 
7 blue_magician, green_magician, yellow_magic_sergeant, red_magic_sergeant, princess, 
8 rock, superion_rock, ghost_soldier, soldier, dark_knight
9 great_magician, vampire, slime_man, elite_slime_man, 
  warp_staff, great_warp_staff
10 ... dragon_slayer,
11 iron_sword, knight_sword, silver_sword, holy_sword, sacred_sword,
12 iron_shield, knihgt_shield, sliver_shield, holy_shield, sacred_shield,
cristal, 
elixir
orb_of_wisdom, orb_of_flying, 
 

giant_octopus,
dragon,
altar,
*/

// missing fairy, gate_guardian, cross, elixir snow_crystal

var w_s, // warp staff, 440
    g_w_s, // 441
    d_s, // dragon_slayer, 442
    w1, w2, w3, w4, w5, // 400 - 404
    s1, s2, s3, s4, s5, // 410 - 414
    y_key, b_key, r_key, // 420 - 422
    y_d, b_d, r_d, g_d, cage, // 425 - 429
    tile, down, up, lava, wall1, wall2, wall3, void2,// 0 - 9
    o_w, // 443
    
    b_c, // 430
    r_c, // 431
    
    b_e, // 432
    r_e, // 433
    
    player_f0,
    player_b0;

var green_s = new Array(2), // 100
    r_s = new Array(2), // 101
    b_s = new Array(2), // 102
    s_l = new Array(2), // 103
    f_s = new Array(2), // 300
    bat = new Array(2), // 110
    b_b = new Array(2), // 111
    v_b = new Array(2), // 112
    e_b = new Array(2), // 113
    merchant = new Array(2), // 301
    skeleton = new Array(2), // 120
    s_k = new Array(2), // 121
    y_s_k = new Array(2), // 122
    e_s_k = new Array(2), // 123
    thief = new Array(2), // 302
    perist = new Array(2), // 130
    y_p = new Array(2), // 131
    r_p = new Array(2), // 132
    magician = new Array(2), // 133
    s_m = new Array(2), // 134
    zombie = new Array(2), // 140
    z_k = new Array(2), // 141
    e_z_k = new Array(2), // 142
    swordsman = new Array(2), // 150
    s_s = new Array(2), // 151
    g_k = new Array(2), // 160
    b_k = new Array(2), // 161
    knight = new Array(2), // 162
    g_g = new Array(2), // 170
    s_g_g = new Array(2), // 171
    b_m = new Array(2), // 180
    g_m = new Array(2), // 181
    y_m_s = new Array(2), // 182
    r_m_s = new Array(2), // 183
    princess = new Array(2), // 303
    rock = new Array(2), // 172
    s_r = new Array(2), // 173
    g_s = new Array(2), // 190
    soldier = new Array(2), // 191 
    d_k = new Array(2), // 192
    great_m = new Array(2), // 193
    vampire = new Array(2), // 194
    slimeman = new Array(2), // 104
    e_s = new Array(2), // 105
    
    /*
    0 1 2
    3 4 5 
    6 7 8
    */
    
    dragon0 = new Array(2), // 250
    dragon1 = new Array(2), // 251
    dragon2 = new Array(2), // 252
    dragon3 = new Array(2), // 253
    dragon4 = new Array(2), // 254
    dragon5 = new Array(2), // 255
    dragon6 = new Array(2), // 256
    dragon7 = new Array(2), // 257
    dragon8 = new Array(2), // 258
    
    g_o0 = new Array(2), // 260
    g_o1 = new Array(2), // 261
    g_o2 = new Array(2), // 262
    g_o3 = new Array(2), // 263
    g_o4 = new Array(2), // 264
    g_o5 = new Array(2), // 265
    g_o6 = new Array(2), // 266
    g_o7 = new Array(2), // 267
    g_o8 = new Array(2), // 268
    
    player_f = new Array(2),
    player_b = new Array(2),
    player_l = new Array(2),
    player_r = new Array(2),

    altar = new Array(2); // 304

function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites(img) {
    var SIZE = 48; 
    player_f0 = new Sprite(img, 0*SIZE, 9*SIZE, SIZE, SIZE);
    player_b0 = new Sprite(img, 2*SIZE, 9*SIZE, SIZE, SIZE); 
    player_f[0] = new Sprite(img, 0*SIZE, 9*SIZE, SIZE, SIZE);
    player_f[1] = new Sprite(img, 1*SIZE, 9*SIZE, SIZE, SIZE); 
    player_b[0] = new Sprite(img, 3*SIZE, 9*SIZE, SIZE, SIZE); 
    player_b[1] = new Sprite(img, 4*SIZE, 9*SIZE, SIZE, SIZE); 
    player_l[0] = new Sprite(img, 5*SIZE, 9*SIZE, SIZE, SIZE); 
    player_l[1] = new Sprite(img, 6*SIZE, 9*SIZE, SIZE, SIZE); 
    player_r[0] = new Sprite(img, 7*SIZE, 9*SIZE, SIZE, SIZE); 
    player_r[1] = new Sprite(img, 8*SIZE, 9*SIZE, SIZE, SIZE); 
    
    g_o0[0] = new Sprite(img, 10*SIZE, 0*SIZE, SIZE, SIZE);
    g_o1[0] = new Sprite(img, 11*SIZE, 0*SIZE, SIZE, SIZE);
    g_o2[0] = new Sprite(img, 12*SIZE, 0*SIZE, SIZE, SIZE);
    g_o3[0] = new Sprite(img, 10*SIZE, 1*SIZE, SIZE, SIZE);
    g_o4[0] = new Sprite(img, 11*SIZE, 1*SIZE, SIZE, SIZE);
    g_o5[0] = new Sprite(img, 12*SIZE, 1*SIZE, SIZE, SIZE);
    g_o6[0] = new Sprite(img, 10*SIZE, 2*SIZE, SIZE, SIZE);
    g_o7[0] = new Sprite(img, 11*SIZE, 2*SIZE, SIZE, SIZE);
    g_o8[0] = new Sprite(img, 12*SIZE, 2*SIZE, SIZE, SIZE);
    g_o0[1] = new Sprite(img, 10*SIZE, 3*SIZE, SIZE, SIZE);
    g_o1[1] = new Sprite(img, 11*SIZE, 3*SIZE, SIZE, SIZE);
    g_o2[1] = new Sprite(img, 12*SIZE, 3*SIZE, SIZE, SIZE);
    g_o3[1] = new Sprite(img, 10*SIZE, 4*SIZE, SIZE, SIZE);
    g_o4[1] = new Sprite(img, 11*SIZE, 4*SIZE, SIZE, SIZE);
    g_o5[1] = new Sprite(img, 12*SIZE, 4*SIZE, SIZE, SIZE);
    g_o6[1] = new Sprite(img, 10*SIZE, 5*SIZE, SIZE, SIZE);
    g_o7[1] = new Sprite(img, 11*SIZE, 5*SIZE, SIZE, SIZE);
    g_o8[1] = new Sprite(img, 12*SIZE, 5*SIZE, SIZE, SIZE);
    
    dragon0[0] = new Sprite(img, 10*SIZE, 6*SIZE, SIZE, SIZE);
    dragon1[0] = new Sprite(img, 11*SIZE, 6*SIZE, SIZE, SIZE);
    dragon2[0] = new Sprite(img, 12*SIZE, 6*SIZE, SIZE, SIZE);
    dragon3[0] = new Sprite(img, 10*SIZE, 7*SIZE, SIZE, SIZE);
    dragon4[0] = new Sprite(img, 11*SIZE, 7*SIZE, SIZE, SIZE);
    dragon5[0] = new Sprite(img, 12*SIZE, 7*SIZE, SIZE, SIZE);
    dragon6[0] = new Sprite(img, 10*SIZE, 8*SIZE, SIZE, SIZE);
    dragon7[0] = new Sprite(img, 11*SIZE, 8*SIZE, SIZE, SIZE);
    dragon8[0] = new Sprite(img, 12*SIZE, 8*SIZE, SIZE, SIZE);
    dragon0[1] = new Sprite(img, 10*SIZE, 9*SIZE, SIZE, SIZE);
    dragon1[1] = new Sprite(img, 11*SIZE, 9*SIZE, SIZE, SIZE);
    dragon2[1] = new Sprite(img, 12*SIZE, 9*SIZE, SIZE, SIZE);
    dragon3[1] = new Sprite(img, 10*SIZE, 10*SIZE, SIZE, SIZE);
    dragon4[1] = new Sprite(img, 11*SIZE, 10*SIZE, SIZE, SIZE);
    dragon5[1] = new Sprite(img, 12*SIZE, 10*SIZE, SIZE, SIZE);
    dragon6[1] = new Sprite(img, 10*SIZE, 11*SIZE, SIZE, SIZE);
    dragon7[1] = new Sprite(img, 11*SIZE, 11*SIZE, SIZE, SIZE);
    dragon8[1] = new Sprite(img, 12*SIZE, 11*SIZE, SIZE, SIZE);
    
    altar[0] = new Sprite(img, 11*SIZE, 12*SIZE, SIZE, SIZE);
    altar[1] = new Sprite(img, 11*SIZE, 13*SIZE, SIZE, SIZE);
    
    green_s[0] = new Sprite(img, 0*SIZE, 0*SIZE, SIZE, SIZE);
    green_s[1] = new Sprite(img, 1*SIZE, 0*SIZE, SIZE, SIZE);
    r_s[0] = new Sprite(img, 2*SIZE, 0*SIZE, SIZE, SIZE);
    r_s[1] = new Sprite(img, 3*SIZE, 0*SIZE, SIZE, SIZE);
    b_s[0] = new Sprite(img, 4*SIZE, 0*SIZE, SIZE, SIZE);
    b_s[1] = new Sprite(img, 5*SIZE, 0*SIZE, SIZE, SIZE);
    s_l[0] = new Sprite(img, 6*SIZE, 0*SIZE, SIZE, SIZE);
    s_l[1] = new Sprite(img, 7*SIZE, 0*SIZE, SIZE, SIZE);
    f_s[0] = new Sprite(img, 8*SIZE, 0*SIZE, SIZE, SIZE);
    f_s[1] = new Sprite(img, 9*SIZE, 0*SIZE, SIZE, SIZE);
    
    bat[0] = new Sprite(img, 0*SIZE, 1*SIZE, SIZE, SIZE);
    bat[1] = new Sprite(img, 1*SIZE, 1*SIZE, SIZE, SIZE);
    b_b[0] = new Sprite(img, 2*SIZE, 1*SIZE, SIZE, SIZE);
    b_b[1] = new Sprite(img, 3*SIZE, 1*SIZE, SIZE, SIZE);
    v_b[0] = new Sprite(img, 4*SIZE, 1*SIZE, SIZE, SIZE);
    v_b[1] = new Sprite(img, 5*SIZE, 1*SIZE, SIZE, SIZE);
    e_b[0] = new Sprite(img, 6*SIZE, 1*SIZE, SIZE, SIZE);
    e_b[1] = new Sprite(img, 7*SIZE, 1*SIZE, SIZE, SIZE);
    merchant[0] = new Sprite(img, 8*SIZE, 1*SIZE, SIZE, SIZE);
    merchant[1] = new Sprite(img, 9*SIZE, 1*SIZE, SIZE, SIZE);
    
    skeleton[0] = new Sprite(img, 0*SIZE, 2*SIZE, SIZE, SIZE);
    skeleton[1] = new Sprite(img, 1*SIZE, 2*SIZE, SIZE, SIZE);
    s_k[0] = new Sprite(img, 2*SIZE, 2*SIZE, SIZE, SIZE);
    s_k[1] = new Sprite(img, 3*SIZE, 2*SIZE, SIZE, SIZE);
    y_s_k[0] = new Sprite(img, 4*SIZE, 2*SIZE, SIZE, SIZE);
    y_s_k[1] = new Sprite(img, 5*SIZE, 2*SIZE, SIZE, SIZE);
    e_s_k[0] = new Sprite(img, 6*SIZE, 2*SIZE, SIZE, SIZE);
    e_s_k[1] = new Sprite(img, 7*SIZE, 2*SIZE, SIZE, SIZE);
    thief[0] = new Sprite(img, 8*SIZE, 2*SIZE, SIZE, SIZE);
    thief[1] = new Sprite(img, 9*SIZE, 2*SIZE, SIZE, SIZE);
    
    perist[0] = new Sprite(img, 0*SIZE, 3*SIZE, SIZE, SIZE);
    perist[1] = new Sprite(img, 1*SIZE, 3*SIZE, SIZE, SIZE);
    y_p[0] = new Sprite(img, 2*SIZE, 3*SIZE, SIZE, SIZE);
    y_p[1] = new Sprite(img, 3*SIZE, 3*SIZE, SIZE, SIZE);
    r_p[0] = new Sprite(img, 4*SIZE, 3*SIZE, SIZE, SIZE);
    r_p[1] = new Sprite(img, 5*SIZE, 3*SIZE, SIZE, SIZE);
    magician[0] = new Sprite(img, 6*SIZE, 3*SIZE, SIZE, SIZE);
    magician[1] = new Sprite(img, 7*SIZE, 3*SIZE, SIZE, SIZE);
    s_m[0] = new Sprite(img, 8*SIZE, 3*SIZE, SIZE, SIZE);
    s_m[1] = new Sprite(img, 9*SIZE, 3*SIZE, SIZE, SIZE);
    
    zombie[0] = new Sprite(img, 0*SIZE, 4*SIZE, SIZE, SIZE);
    zombie[1] = new Sprite(img, 1*SIZE, 4*SIZE, SIZE, SIZE);
    z_k[0] = new Sprite(img, 2*SIZE, 4*SIZE, SIZE, SIZE);
    z_k[1] = new Sprite(img, 3*SIZE, 4*SIZE, SIZE, SIZE);
    e_z_k[0] = new Sprite(img, 4*SIZE, 4*SIZE, SIZE, SIZE);
    e_z_k[1] = new Sprite(img, 5*SIZE, 4*SIZE, SIZE, SIZE);
    swordsman[0] = new Sprite(img, 6*SIZE, 4*SIZE, SIZE, SIZE);
    swordsman[1] = new Sprite(img, 7*SIZE, 4*SIZE, SIZE, SIZE);
    s_s[0] = new Sprite(img, 8*SIZE, 4*SIZE, SIZE, SIZE);
    s_s[1] = new Sprite(img, 9*SIZE, 4*SIZE, SIZE, SIZE);
    
    g_k[0] = new Sprite(img, 0*SIZE, 5*SIZE, SIZE, SIZE);
    g_k[1] = new Sprite(img, 1*SIZE, 5*SIZE, SIZE, SIZE);
    b_k[0] = new Sprite(img, 2*SIZE, 5*SIZE, SIZE, SIZE);
    b_k[1] = new Sprite(img, 3*SIZE, 5*SIZE, SIZE, SIZE);
    knight[0] = new Sprite(img, 4*SIZE, 5*SIZE, SIZE, SIZE);
    knight[1] = new Sprite(img, 5*SIZE, 5*SIZE, SIZE, SIZE);
    g_g[0] = new Sprite(img, 6*SIZE, 5*SIZE, SIZE, SIZE);
    g_g[1] = new Sprite(img, 7*SIZE, 5*SIZE, SIZE, SIZE);
    s_g_g[0] = new Sprite(img, 8*SIZE, 5*SIZE, SIZE, SIZE);
    s_g_g[1] = new Sprite(img, 9*SIZE, 5*SIZE, SIZE, SIZE);
    
    b_m[0] = new Sprite(img, 0*SIZE, 6*SIZE, SIZE, SIZE);
    b_m[1] = new Sprite(img, 1*SIZE, 6*SIZE, SIZE, SIZE);
    g_m[0] = new Sprite(img, 2*SIZE, 6*SIZE, SIZE, SIZE);
    g_m[1] = new Sprite(img, 3*SIZE, 6*SIZE, SIZE, SIZE);
    y_m_s[0] = new Sprite(img, 4*SIZE, 6*SIZE, SIZE, SIZE);
    y_m_s[1] = new Sprite(img, 5*SIZE, 6*SIZE, SIZE, SIZE);
    r_m_s[0] = new Sprite(img, 6*SIZE, 6*SIZE, SIZE, SIZE);
    r_m_s[1] = new Sprite(img, 7*SIZE, 6*SIZE, SIZE, SIZE);
    princess[0] = new Sprite(img, 8*SIZE, 6*SIZE, SIZE, SIZE);
    princess[1] = new Sprite(img, 9*SIZE, 6*SIZE, SIZE, SIZE);
    
    rock[0] = new Sprite(img, 0*SIZE, 7*SIZE, SIZE, SIZE);
    rock[1] = new Sprite(img, 1*SIZE, 7*SIZE, SIZE, SIZE);
    s_r[0] = new Sprite(img, 2*SIZE, 7*SIZE, SIZE, SIZE);
    s_r[1] = new Sprite(img, 3*SIZE, 7*SIZE, SIZE, SIZE);
    g_s[0] = new Sprite(img, 4*SIZE, 7*SIZE, SIZE, SIZE);
    g_s[1] = new Sprite(img, 5*SIZE, 7*SIZE, SIZE, SIZE);
    soldier[0] = new Sprite(img, 6*SIZE, 7*SIZE, SIZE, SIZE);
    soldier[1] = new Sprite(img, 7*SIZE, 7*SIZE, SIZE, SIZE);
    d_k[0] = new Sprite(img, 8*SIZE, 7*SIZE, SIZE, SIZE);
    d_k[1] = new Sprite(img, 9*SIZE, 7*SIZE, SIZE, SIZE);
    
    great_m[0] = new Sprite(img, 0*SIZE, 8*SIZE, SIZE, SIZE);
    great_m[1] = new Sprite(img, 1*SIZE, 8*SIZE, SIZE, SIZE);
    vampire[0] = new Sprite(img, 2*SIZE, 8*SIZE, SIZE, SIZE);
    vampire[1] = new Sprite(img, 3*SIZE, 8*SIZE, SIZE, SIZE);
    slimeman[0] = new Sprite(img, 4*SIZE, 8*SIZE, SIZE, SIZE);
    slimeman[1] = new Sprite(img, 5*SIZE, 8*SIZE, SIZE, SIZE);
    e_s[0] = new Sprite(img, 6*SIZE, 8*SIZE, SIZE, SIZE);
    e_s[1] = new Sprite(img, 7*SIZE, 8*SIZE, SIZE, SIZE);
    w_s = new Sprite(img, 8*SIZE, 8*SIZE, SIZE, SIZE);
    g_w_s = new Sprite(img, 9*SIZE, 8*SIZE, SIZE, SIZE);
    
    d_s = new Sprite(img, 9*SIZE, 9*SIZE, SIZE, SIZE);
    
    w1 = new Sprite(img, 0*SIZE, 10*SIZE, SIZE, SIZE);
    w2 = new Sprite(img, 1*SIZE, 10*SIZE, SIZE, SIZE);
    w3 = new Sprite(img, 2*SIZE, 10*SIZE, SIZE, SIZE);
    w4 = new Sprite(img, 3*SIZE, 10*SIZE, SIZE, SIZE);
    w5 = new Sprite(img, 4*SIZE, 10*SIZE, SIZE, SIZE);
    y_key= new Sprite(img, 5*SIZE, 10*SIZE, SIZE, SIZE);
    b_key = new Sprite(img, 6*SIZE, 10*SIZE, SIZE, SIZE);
    r_key= new Sprite(img, 7*SIZE, 10*SIZE, SIZE, SIZE);
    
    s1 = new Sprite(img, 0*SIZE, 11*SIZE, SIZE, SIZE);
    s2 = new Sprite(img, 1*SIZE, 11*SIZE, SIZE, SIZE);
    s3 = new Sprite(img, 2*SIZE, 11*SIZE, SIZE, SIZE);
    s4 = new Sprite(img, 3*SIZE, 11*SIZE, SIZE, SIZE);
    s5 = new Sprite(img, 4*SIZE, 11*SIZE, SIZE, SIZE);
    y_d = new Sprite(img, 5*SIZE, 11*SIZE, SIZE, SIZE);
    b_d = new Sprite(img, 6*SIZE, 11*SIZE, SIZE, SIZE);
    r_d = new Sprite(img, 7*SIZE, 11*SIZE, SIZE, SIZE);
    g_d = new Sprite(img, 8*SIZE, 11*SIZE, SIZE, SIZE);
    cage = new Sprite(img, 9*SIZE, 11*SIZE, SIZE, SIZE);
    
    tile = new Sprite(img, 0*SIZE, 12*SIZE, SIZE, SIZE);
    down = new Sprite(img, 1*SIZE, 12*SIZE, SIZE, SIZE);
    up = new Sprite(img, 2*SIZE, 12*SIZE, SIZE, SIZE);
    lava = new Sprite(img, 3*SIZE, 12*SIZE, SIZE, SIZE);
    o_w = new Sprite(img, 4*SIZE, 12*SIZE, SIZE, SIZE);
    b_c = new Sprite(img, 6*SIZE, 12*SIZE, SIZE, SIZE);
    r_c = new Sprite(img, 7*SIZE, 12*SIZE, SIZE, SIZE);
    
    wall1 = new Sprite(img, 0*SIZE, 13*SIZE, SIZE, SIZE);
    wall2 = new Sprite(img, 1*SIZE, 13*SIZE, SIZE, SIZE);
    wall3 = new Sprite(img, 2*SIZE, 13*SIZE, SIZE, SIZE);
    void2 = new Sprite(img, 4*SIZE, 13*SIZE, SIZE, SIZE); // change to 3 if no animation.
    b_e = new Sprite(img, 6*SIZE, 13*SIZE, SIZE, SIZE);
    r_e = new Sprite(img, 7*SIZE, 13*SIZE, SIZE, SIZE);
}
