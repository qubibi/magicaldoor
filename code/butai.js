
let c_door;

function but_setup() {
	c_door = new DoorSet();
	
}

let doorhasinuruxA = 500;
let doorhasinuruxB = 500;
let zawazawa_mul = 1;
let zawazawa_mul_tgt = 1;
function but_ef() {	

	let _cx = cnvs_wh/2 - c_door.myw/2;
	let _cy = cnvs_wh/2 - c_door.myh/2-30;
	c_door.f_mypos(_cx, _cy);
	c_door.f_ef();
	g_room.background(arr_keycol[4]);
	
	zawazawa_mul += (zawazawa_mul_tgt - zawazawa_mul) / 4;
	let _weight = qb.rndmr(22, 3*zawazawa_mul)*senhutosa_mag;//g_room.strokeWeight( qb.rndmr(22, 3) );
	let _weight_door = (qb.rndmr(22, 3*zawazawa_mul)* weight_door_mag)*senhutosa_mag;
	if (is_doorga_hosoi) _weight_door = 3//(qb.rndmr(22, 3*zawazawa_mul)* weight_door_mag)*senhutosa_mag;
	let _weight_knob = qb.mppng(senhutosa_mag, .8, 3,  23, 45);
	
// _weight = _weight_door = 2

	let _yurayura = 1.5*zawazawa_mul;
	// _yurayura = 0;
	let _yurayura_hikari = (1.6+ nyu.door_mspd_amari/10 )*zawazawa_mul;
	// _yurayura_hikari = 0;
	let _yurayura_hikari_yuka = (1)*zawazawa_mul;
	// _yurayura_hikari_yuka = 0;
	let _yurayura_door = ((1* senhutosa_mag_yura)+ nyu.door_mspd_amari/15)*zawazawa_mul;
	// _yurayura_door = 0;
	// g_room.strokeCap(PROJECT)



	
	let _gap = sengap;
	let _gapknob = 6;
	scrbl.bowing    = .3;
	scrbl.roughness = 6+door_openclose_v*1;
	scrbl.maxOffset = _yurayura * senhutosa_mag_yura;
	let _angle = 90//qb.rndmr(90, 2);
	let _angle_akari = 90;
	

	let _ifholexhasi = c_door.arr_door_px[0];
	if (c_door.arr_door_px[0] > c_door.arr_door_px[1])_ifholexhasi = c_door.arr_door_px[1];
	let _ifholexhasi2 = c_door.arr_door_px[0];
	if (c_door.arr_door_px[1] > c_door.arr_door_px[0])_ifholexhasi2 = c_door.arr_door_px[1];
	let _ifholexhasi3 = c_door.arr_door_px[2];
	if (c_door.arr_door_px[2] < c_door.arr_hole_px[3]) _ifholexhasi3 = c_door.arr_hole_px[3];
	doorhasinuruxA += (_ifholexhasi-doorhasinuruxA)/1.99
	// doorhasinuruxA += (_ifholexhasi-doorhasinuruxA)/1.77
	doorhasinuruxB += (_ifholexhasi2 - doorhasinuruxB)/2
	let _suityoku = suityoku_skm
	// let _suityoku = 16
	let _skmy  = -10
	let _skmx  = qb.mppng(senhutosa_mag, .8, 2.2,  10, 35)+hosoitokino_sukima;
	let _skmx_ryouwaki = _skmx*1.
	// let _skmx  = 22 
let _kabe = 0
	g_room.stroke( arr_keycol[0] );
	let bg1_px = [0,                      c_door.arr_door_px[1]-_skmx, c_door.arr_door_px[1]-_skmx , doorhasinuruxA-_skmx_ryouwaki, doorhasinuruxA-_skmx_ryouwaki-katamuki2,    0]
	let bg1_py = [0,                       0,                     c_door.arr_door_py[1]+_skmy,  c_door.arr_door_py[0]+_skmy,  c_door.arr_door_py[3]-3,  c_door.arr_door_py[3]-3]
	scrbl.scribbleFilling( bg1_px, bg1_py , _gap+_kabe, _angle,  arr_keycol[0] );
	let bg2_px = [c_door.arr_door_px[1],   cnvs_wh,              cnvs_wh ,                c_door.arr_hole_px[2]+_skmx_ryouwaki, c_door.arr_hole_px[1]+_skmx_ryouwaki,  doorhasinuruxB,  c_door.arr_door_px[1]]
	let bg2_py = [0,                       0,                    c_door.arr_hole_py[2]-3,  c_door.arr_hole_py[2]-3,  c_door.arr_hole_py[1]+_skmy,  c_door.arr_hole_py[0]+_skmy,  c_door.arr_door_py[1]+_skmy]
	scrbl.scribbleFilling( bg2_px, bg2_py , _gap+_kabe, _angle,  arr_keycol[0] );
	
	let bg3_px = [0,                      _ifholexhasi-_skmx-katamuki2, c_door.arr_door_px[1]-katamuki2 , c_door.arr_door_px[1]-katamuki2,  0]
	let bg3_py = [c_door.arr_hole_py[3]+_suityoku ,  c_door.arr_hole_py[3]+_suityoku,  c_door.arr_door_py[2]+_suityoku,  cnvs_wh,          cnvs_wh]
	scrbl.scribbleFilling( bg3_px, bg3_py , _gap+_kabe, _angle,  arr_keycol[0] );
	let bg4_px = [_ifholexhasi3,            cnvs_wh,     cnvs_wh , c_door.arr_door_px[2]+_skmx,  c_door.arr_door_px[2]+_skmx]
	let bg4_py = [c_door.arr_hole_py[3]+_suityoku,  c_door.arr_hole_py[3]+_suityoku,  cnvs_wh,  cnvs_wh,  c_door.arr_door_py[2]+_suityoku]
	scrbl.scribbleFilling( bg4_px, bg4_py , _gap+_kabe, _angle,  arr_keycol[0] );
	
	scrbl.bowing    = .3+ nyu.door_mspd_amari/25;
	scrbl.roughness = 4+door_openclose_v*1+ nyu.door_mspd_amari/12;
	scrbl.maxOffset = _yurayura_hikari;
	g_room.stroke( arr_keycol[1] );
	scrbl.scribbleFilling( c_door.arr_hole_px, c_door.arr_hole_py , _gap, _angle, arr_keycol[1] );

	if (door_openclose_v>.01) {
		scrbl.bowing    = 0.1;
		// scrbl.roughness = 3.8;
		scrbl.maxOffset = _yurayura_hikari_yuka;
		
		g_room.stroke( arr_keycol[1] );
		scrbl.scribbleFilling2( c_door.arr_akari_px, c_door.arr_akari_py , _gap+hutoitoki_yukahikari, _angle_akari, arr_keycol[1] );
	}

	scrbl.bowing    = .3+ nyu.door_mspd_amari/10;
	scrbl.roughness = 3+door_openclose_v*1+ nyu.door_mspd_amari/15;
	scrbl.maxOffset = _yurayura_door;


	
	// g_room.strokeWeight( qb.rndmr(12, 2) );
	g_room.strokeWeight( _weight_knob );
	if (door_openclose_v>=.5) {
		g_room.stroke( arr_keycol[3] );
		scrbl.scribbleFilling( c_door.arr_nob_px, c_door.arr_nob_py , _gapknob, _angle, arr_keycol[3] );
	}
	g_room.strokeWeight( _weight_door );
	// g_room.strokeWeight( qb.rndmr(22, 3)*.78 );
	g_room.stroke( arr_keycol[2] );
	scrbl.scribbleFilling( c_door.arr_door_px, c_door.arr_door_py , _gap, _angle, arr_keycol[2] );
	
	g_room.strokeWeight( _weight_knob );
	if (door_openclose_v<.5) {
		g_room.stroke( arr_keycol[3] );
		scrbl.scribbleFilling( c_door.arr_nob_px, c_door.arr_nob_py , _gapknob, _angle, arr_keycol[3] );
	}

	g_room.resetMatrix()
	g_room.strokeWeight( _weight );
}


