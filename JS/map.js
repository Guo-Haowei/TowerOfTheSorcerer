/*TILE:0,WALL1:1, WALL2:2, LAVA: 5, VOID1:6 , VOID2: 7, UP:8, DOWN:9*/

var TOT = {TILE:0,WALL1:1,REMOVE_WALL:2,REMOVE_TILE:3,REMOVE_LAVA:4,LAVA:5,VOID1:6,
           UP:8,DOWN:9,
           // 0 - 9 tiles
           SLIME1:100,SLIME2:101,SLIME3:102,SLIMELORD:103,SLIME5:104,SLIME6:105,
           BAT1:110,BAT2:111,BAT3:112,BAT4:113,
           SKELETON1:120,SKELETON2:121,SKELETON3:122,SKELETON4:123,
           PERSIST1:130,PERSIST2:131,PERSIST3:132,MAGICIAN1:133,MAGICIAN2:134,
           ZOMBIE1:140,ZOMBIE2:141,ZOMBIE3:132,
           SWORDSMAN1:150,SWORDSMAN2:151,
           KNIHGT1:160,KNIGHT2:161,KNIGHT3:162,
           GG1:170,GG2:171,ROCK1:172,ROCK2:173,
           MAGIC1:180,MAGIC2:181,MAGIC3:182,MAGIC4:183,
           SOLDIER1:190,SOLDIER2:191,SOLDIER3:192, MAGICIAN3:193, VAMPIRE:194,
           DRAGON:250,
           OCTOPUS:260,
           // 100 - 300 monsters
           FARSEER:300, MERCHANT:301,THIEF:302,PRINCESS:303,ALTAR:304,
           // 300 - 400 gaia
           WARP1:440,WARP2:441,SLAYER:442,
           SWORD1:400,SWORD2:401,SWORD3:402,SWORD4:403,SWORD5:404,
           SHIELD1:410,SHIELD2:411,SHIELD3:412,SHIELD4:413,SHIELD5:414,
           KEY1:420,KEY2:421,KEY3:422,DOOR1:425,DOOR2:426,DOOR3:427,DOOR4:428,DOOR5:429,
           GEM1:430,GEM2:431,EXILIR1:432,EXILIR2:433 
           // 400 - 500 items
          };

// a floor should be 11 by 11

function draw_map() {
    for (var y = 0; y < 11; ++y) {
        for (var x = 0; x < 11; ++x) {
            var index = y * 11 + x;
            var type = tower[floor][index];
            switch (type) {
                case TOT.TILE:
                    draw_help(ctx, x, y, tile);
                    break;
                case TOT.LAVA:
                    draw_help(ctx, x, y, lava);
                    break;
				case TOT.WALL1:
                    draw_help(ctx, x, y, wall1);
                    break;
				case TOT.UP:
					draw_help(ctx, x, y, up);
					break;
				case TOT.DOWN:
					draw_help(ctx, x, y, down);
					break;
				case TOT.REMOVE_WALL:
                    draw_help(ctx, x, y, wall2);
                    break;
                case TOT.REMOVE_LAVA:
                    draw_help(ctx, x, y, lava);
                    break;
                case TOT.REMOVE_TILE:
                    draw_help(ctx, x, y, tile);
                    break;
                case TOT.VOID1:
                    if (timer2 == 1) draw_help(ctx, x, y, void2);
                    break;
                case TOT.SLIME1:
                    draw_help(ctx, x, y, green_s[timer2]);
                    break;
                case TOT.SLIME2:
                    draw_help(ctx, x, y, r_s[timer2]);
                    break;
                case TOT.SLIME3:
                    draw_help(ctx, x, y, b_s[timer2]);
                    break;
                case TOT.SLIMELORD:
                    draw_help(ctx, x, y, s_l[timer2]);
                    break;
                case TOT.SLIME5:
                    draw_help(ctx, x, y, slimeman[timer2]);
                    break;
                case TOT.SLIME6:
                    draw_help(ctx, x, y, e_s[timer2]);
                    break;
                case TOT.BAT1:
                    draw_help(ctx, x, y, bat[timer2]);
                    break;
                case TOT.BAT2:
                    draw_help(ctx, x, y, b_b[timer2]);
                    break;
                case TOT.BAT3:
                    draw_help(ctx, x, y, v_b[timer2]);
                    break;
                case TOT.BAT4:
                    draw_help(ctx, x, y, e_b[timer2]);
                    break;
                case TOT.SKELETON1:
                    draw_help(ctx, x, y, skeleton[timer2]);
                    break;
                case TOT.SKELETON2:
                    draw_help(ctx, x, y, s_k[timer2]);
                    break;
                case TOT.SKELETON3:
                    draw_help(ctx, x, y, y_s_k[timer2]);
                    break;
                case TOT.SKELETON4:
                    draw_help(ctx, x, y, e_s_k[timer2]);
                    break;
                case TOT.PERSIST1:
                    draw_help(ctx, x, y, perist[timer2]);
                    break;
                case TOT.PERSIST2:
                    draw_help(ctx, x, y, y_p[timer2]);
                    break;
                case TOT.PERSIST3:
                    draw_help(ctx, x, y, r_p[timer2]);
                    break;
                case TOT.MAGICIAN1:
                    draw_help(ctx, x, y, magician[timer2]);
                    break;
                case TOT.MAGICIAN2:
                    draw_help(ctx, x, y, s_m[timer2]);
                    break;
                case TOT.ZOMBIE1:
                    draw_help(ctx, x, y, zombie[timer2]);
                    break;
                case TOT.ZOMBIE2:
                    draw_help(ctx, x, y, z_k[timer2]);
                    break;
                case TOT.ZOMBIE3:
                    draw_help(ctx, x, y, e_z_k[timer2]);
                    break;
                case TOT.SWORDSMAN1:
                    draw_help(ctx, x, y, swordsman[timer2]);
                    break;
                case TOT.SWORDSMAN2:
                    draw_help(ctx, x, y, s_s[timer2]);
                    break;
                case TOT.KNIHGT1:
                    draw_help(ctx, x, y, g_k[timer2]);
                    break;
                case TOT.KNIGHT2:
                    draw_help(ctx, x, y, b_k[timer2]);
                    break;
                case TOT.KNIGHT3:
                    draw_help(ctx, x, y, knight[timer2]);
                    break;
                case TOT.ROCK1:
                    draw_help(ctx, x, y, rock[timer2]);
                    break;
                case TOT.ROCK2:
                    draw_help(ctx, x, y, s_r[timer2]);
                    break;
                case TOT.GG1:
                    draw_help(ctx, x, y, g_g[timer2]);
                    break;
                case TOT.GG2:
                    draw_help(ctx, x, y, s_g_g[timer2]);
                    break;
                case TOT.MAGIC1:
                    draw_help(ctx, x, y, b_m[timer2]);
                    break;
                case TOT.MAGIC2:
                    draw_help(ctx, x, y, g_m[timer2]);
                    break;
                case TOT.MAGIC3:
                    draw_help(ctx, x, y, y_m_s[timer2]);
                    break;
                case TOT.MAGIC4:
                    draw_help(ctx, x, y, r_m_s[timer2]);
                    break;
                case TOT.SOLDIER1:
                    draw_help(ctx, x, y, g_s[timer2]);
                    break;
                case TOT.SOLDIER2:
                    draw_help(ctx, x, y, soldier[timer2]);
                    break;
                case TOT.SOLDIER3:
                    draw_help(ctx, x, y, d_k[timer2]);
                    break;
                case TOT.MAGICIAN3:
                    draw_help(ctx, x, y, great_m[timer2]);
                    break;
                case TOT.VAMPIRE:
                    draw_help(ctx, x, y, vampire[timer2]);
                    break;
                case TOT.DRAGON:
                    draw_help(ctx, x-1, y-1, dragon0[timer2]);
                    draw_help(ctx, x, y-1, dragon1[timer2]);
                    draw_help(ctx, x+1, y-1, dragon2[timer2]);
                    draw_help(ctx, x-1, y, dragon3[timer2]);
                    draw_help(ctx, x, y, dragon4[timer2]);
                    draw_help(ctx, x+1, y, dragon5[timer2]);
                    draw_help(ctx, x-1, y+1, dragon6[timer2]);
                    draw_help(ctx, x, y+1, dragon7[timer2]);
                    draw_help(ctx, x+1, y+1, dragon8[timer2]);
                    break;
                case TOT.SKELETON3:
                    draw_help(ctx, x-1, y-1, g_o0[timer2]);
                    draw_help(ctx, x, y-1, g_o1[timer2]);
                    draw_help(ctx, x+1, y-1, g_o2[timer2]);
                    draw_help(ctx, x-1, y, g_o3[timer2]);
                    draw_help(ctx, x, y, g_o4[timer2]);
                    draw_help(ctx, x+1, y, g_o5[timer2]);
                    draw_help(ctx, x-1, y+1, g_o6[timer2]);
                    draw_help(ctx, x, y+1, g_o7[timer2]);
                    draw_help(ctx, x+1, y+1, g_o8[timer2]);
                    break;
                case TOT.FARSEER:
                    draw_help(ctx, x, y, f_s[timer2]);
                    break;
                case TOT.MERCHANT:
                    draw_help(ctx, x, y, merchant[timer2]);
                    break;
                case TOT.THIEF:
                    draw_help(ctx, x, y, thief[timer2]);
                    break;
                case TOT.PRINCESS:
                    draw_help(ctx, x, y, princess[timer2]);
                    break;
                /*case TOT.ALTAR:
                    draw_help(ctx, x, y, altar[timer2]);
                    break;*/
                case TOT.WARP1:
                    draw_help(ctx, x, y, w_s);
                    break;
                case TOT.WARP2:
                    draw_help(ctx, x, y, g_w_s);
                    break;
                case TOT.SLAYER:
                    draw_help(ctx, x, y, d_s);
                    break;
                case TOT.SWORD1:
                    draw_help(ctx, x, y, w1);
                    break;
                case TOT.SWORD2:
                    draw_help(ctx, x, y, w2);
                    break;
                case TOT.SWORD3:
                    draw_help(ctx, x, y, w3);
                    break;
                case TOT.SWORD4:
                    draw_help(ctx, x, y, w4);
                    break;
                case TOT.SWORD5:
                    draw_help(ctx, x, y, w5);
                    break;
                case TOT.SHIELD1:
                    draw_help(ctx, x, y, s1);
                    break;
                case TOT.SHIELD2:
                    draw_help(ctx, x, y, s2);
                    break;
                case TOT.SHIELD3:
                    draw_help(ctx, x, y, s3);
                    break;
                case TOT.SHIELD4:
                    draw_help(ctx, x, y, s4);
                    break;
                case TOT.SHIELD5:
                    draw_help(ctx, x, y, s5);
                    break;
                case TOT.KEY1:
                    draw_help(ctx, x, y, y_key);
                    break;
                case TOT.KEY2:
                    draw_help(ctx, x, y, b_key);
                    break;
                case TOT.KEY3:
                    draw_help(ctx, x, y, r_key);
                    break;
                case TOT.DOOR1:
                    draw_help(ctx, x, y, y_d);
                    break;
                case TOT.DOOR2:
                    draw_help(ctx, x, y, b_d);
                    break;
                case TOT.DOOR3:
                    draw_help(ctx, x, y, r_d);
                    break;
                case TOT.DOOR4:
                    draw_help(ctx, x, y, g_d);
                    break;
                case TOT.DOOR5:
                    draw_help(ctx, x, y, cage);
                    break;
                case TOT.GEM1:
                    draw_help(ctx, x, y, r_c);
                    break;
                case TOT.GEM2:
                    draw_help(ctx, x, y, b_c);
                    break;
                case TOT.EXILIR1:
                    draw_help(ctx, x, y, r_e);
                    break;
                case TOT.EXILIR2:
                    draw_help(ctx, x, y, b_e);
                    break;
                
                default:
                    break;
            } 
        }
    }
}

var spawningX, spawningY;

var tower = new Array(100);
// need spawning point.
var tower0 =[5,5,5,5,5,5,5,5,1,402,172,
             5,1,1,1,1,1,1,5,1,172,170,
             1,0,0,0,0,0,0,1,1,1,170,
             0,0,0,5,5,5,0,1,5,1,170,
             0,0,0,4,9,5,0,1,5,1,121,
             8,0,0,5,5,5,0,1,5,1,120,
             0,0,0,0,0,0,0,1,5,1,430,
             141,0,0,1,1,1,1,1,5,1,431,
             302,141,1,5,5,5,5,5,5,1,111,
             1,1,5,1,1,1,1,1,1,1,110,
             5,5,5,1,8,425,432,433,420,421,0,];
var tower1 = [1,1,1,1,1,1,1,1,1,1,1,
              430,0,431,1,1,304,1,1,131,0,8,
              0,0,0,141,0,0,0,141,0,0,0,
              112,0,112,1,0,0,0,1,131,0,300,
              1,428,1,1,1,1,1,1,1,1,1,
              9,0,0,5,5,5,5,5,5,5,5,
              1,1,1,1,1,1,1,1,1,1,1,
              440,122,0,1,0,0,0,1,0,132,442,
              122,0,0,426,0,0,0,426,0,0,132,
              122,172,122,1,1,0,1,1,122,172,122,
              172,411,172,1,9,0,8,1,172,401,172];
var tower2 = [5,5,5,5,5,0,5,5,5,5,5,
              5,5,5,5,0,0,0,4,4,4,9,
              5,5,5,5,5,0,5,5,5,5,5,
              5,5,1,1,1,100,1,1,1,5,5,
              5,5,1,0,0,0,0,0,1,5,5,
              5,5,1,0,0,0,0,0,1,5,5,
              1,1,1,0,0,0,0,0,1,1,1,
              1,8,0,0,0,0,0,0,0,0,1,
              1,0,0,0,0,0,0,0,0,0,1,
              1,301,0,0,0,1,140,1,0,0,1,
              1,0,0,0,0,1,9,1,0,0,1];
var tower3 = [420,0,1,1,1,1,1,1,0,140,410,
              8,0,0,0,0,0,0,425,100,100,140,
              420,0,1,1,170,1,0,1,420,430,432,
              1,1,1,300,429,1,0,1,420,431,433,
              1,1,1,1,1,1,0,1,1,1,1,
              8,0,430,431,420,1,0,0,0,0,0,
              1,1,1,1,130,1,1,1,1,1,0,
              1,9,0,1,0,0,100,110,100,420,0,
              1,1,101,1,0,1,1,1,1,1,0,
              1,0,0,1,0,1,422,421,420,1,0,
              1,0,0,0,0,1,0,0,111,426,0];
var tower4 = [110,0,0,1,5,5,5,5,5,5,5,
              9,110,0,0,0,100,101,100,0,0,5,
              110,0,121,1,5,5,5,0,0,0,5,
              0,121,301,1,1,1,1,0,0,0,5,
              1,1,1,1,0,421,1,1,425,1,1,
              9,0,0,120,0,400,1,160,100,160,3,
              1,1,1,1,0,422,1,1,425,1,1,
              1,304,1,1,1,1,1,0,0,0,0,
              432,101,0,426,0,0,0,0,0,0,0,
              0,0,1,1,1,1,1,1,1,427,1,
              0,0,0,425,0,0,101,102,103,0,3];
tower[0] = tower0;
tower[1] = tower1;
tower[2] = tower2;
tower[3] = tower3;
tower[4] = tower4;