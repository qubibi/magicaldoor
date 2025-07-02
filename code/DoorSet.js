class DoorSet {
	constructor() {
		// this.myw = 200*zoomtype[0]*   .9;
		// this.myh = 410*zoomtype[1]*   .9;

		// if (ososos=="pc") {
		this.myw = doorhaba*zoomtype[0]*   1;
		this.myh = doortakasa * zoomtype[1]*   1;

		// }
		this.pos7 = [0,0];
		this.pos9 = [this.myw, 0];
		this.pos3 = [this.myw, this.myh];
		this.pos1 = [0, this.myh];

		this.hole_p7 = [this.pos7[0]+katamuki,this.pos7[1]];
		this.hole_p9 = [this.pos9[0]+katamuki2,this.pos9[1]];
		this.hole_p3 = [this.pos3[0],this.pos3[1]];
		this.hole_p1 = [this.pos1[0],this.pos1[1]];

		this.door_p7 = [this.pos7[0]+katamuki,this.pos7[1]];
		this.door_p9 = [this.pos9[0]+katamuki2,this.pos9[1]];
		this.door_p3 = [this.pos3[0],this.pos3[1]];
		this.door_p1 = [this.pos1[0],this.pos1[1]];

		this.nob_p7 = [175, this.myh/2+knobiti];
		this.nob_p9 = [170, this.myh/2+knobiti];
		this.nob_p3 = [170, this.myh/2+10+knobiti];
		this.nob_p1 = [175, this.myh/2+10+knobiti];
		// this.nob_p7 = [175, this.myh/2];
		// this.nob_p9 = [170, this.myh/2];
		// this.nob_p3 = [170, this.myh/2+10];
		// this.nob_p1 = [175, this.myh/2+10];

		this.akari_p7 = [this.pos7[0], this.pos7[1]+this.myh];
		this.akari_p9 = [this.pos9[0], this.pos9[1]+this.myh];
		this.akari_p3 = [this.pos3[0], this.pos3[1]+this.myh];
		this.akari_p1 = [this.pos1[0], this.pos1[1]+this.myh];

		this.arr_door_px = []
		this.arr_door_py = []
		this.arr_nob_px = []
		this.arr_nob_py = []
		this.arr_hole_px = []
		this.arr_hole_py = []
		this.arr_akari_px = []
		this.arr_akari_py = []

		this.mypx = 0;
		this.mypy = 0;

	}

	f_mypos(_x,_y) {
		this.mypx = _x; 
		this.mypy = _y;
	}


	f_ef() {
		let _centery = -100 + 0//-nyu.now_edhy/4;
		let _hishagex1 = 0//nyu.now_edhy/5;
		let _testymppx = qb.mppng(door_openclose_v,   0,1,  this.myw, -this.myw, 0);
		let _testymppy = qb.mppng_cu(door_openclose_v,  0,0.5,1,   0,-110-mini1, 0,   2);

		
		// let _katamuki = -40

		let _akarimppx1 = 10;
		let _akarimppx2 = 0;
		if (door_openclose_v < .5) {
			_akarimppx1 = qb.mppng(door_openclose_v,   0, .5,  this.myw,  10, -.85 +hosoitoki);
			_akarimppx2 = qb.mppng(door_openclose_v,   0, .5,  this.myw+366, 0, 0);
		} else if (door_openclose_v <= .74) {
			_akarimppx2 = qb.mppng(door_openclose_v,   .5, .74,  0, -366, 0);
		} else {
			_akarimppx2 = -366;
		}
	
		let _nobx1 = qb.mppng_cu(door_openclose_v,  0,.5,1,   0,-15, 50,   .5);

		this.arr_hole_px = [ 
			this.mypx+this.hole_p7[0] + _hishagex1 , 
			this.mypx+this.hole_p9[0] + -_hishagex1+nyu.door_mspd_amari2*1.2, 
			this.mypx+this.hole_p3[0] + _hishagex1+nyu.door_mspd_amari2*1.2, 
			this.mypx+this.hole_p1[0] + -_hishagex1
			];
		this.arr_hole_py = [ 
			this.mypy+this.hole_p7[1]+ _centery, 
			this.mypy+this.hole_p9[1]+ _centery, 
			this.mypy+this.hole_p3[1]+ _centery, 
			this.mypy+this.hole_p1[1]+ _centery 
			];
		this.arr_door_px = [ 
			this.mypx+this.door_p7[0] + _hishagex1 , 
			this.mypx+_testymppx + -_hishagex1 +katamuki2, 
			this.mypx+_testymppx+ _hishagex1, 
			this.mypx+this.door_p1[0]  + -_hishagex1
			];
		this.arr_door_py = [ 
			this.mypy+this.door_p7[1]+ _centery, 
			this.mypy+this.door_p9[1]+_testymppy+ _centery, 
			this.mypy+this.door_p3[1]+ -_testymppy+ _centery, 
			this.mypy+this.door_p1[1]+ _centery
			];
		this.arr_nob_px = [ 
			this.mypx+_testymppx+  _nobx1 + -25 +katamuki2/2 + mini3,
			this.mypx+_testymppx+  _nobx1 + -20 - _testymppy/10 +katamuki2/2 + mini3,
			this.mypx+_testymppx+  _nobx1 + -20 - _testymppy/10 +katamuki2/2 + mini3,
			this.mypx+_testymppx+  _nobx1 + -25 +katamuki2/2 + mini3
			];
		this.arr_nob_py = [ 
			this.mypy+this.nob_p7[1]+ _centery+_testymppy/15.88, 
			this.mypy+this.nob_p9[1]+ _centery+_testymppy/15.88, 
			this.mypy+this.nob_p3[1]+ _centery+-_testymppy/15.88, 
			this.mypy+this.nob_p1[1]+ _centery+-_testymppy/15.88
			];

		let _xy_fo_akari4_nemoto = [this.mypx+this.hole_p1[0] + -_hishagex1+fo_akari4_zure, this.mypy+this.hole_p1[1]+ _centery]
		if (door_openclose_v < .5) {
			_xy_fo_akari4_nemoto = [this.mypx+_testymppx+ _hishagex1+fo_akari4_zure, this.mypy+this.door_p3[1]+ -_testymppy+ _centery]
		}
		let _xy_fo_akari4_sakipo = [this.mypx+ _akarimppx2, this.mypy+this.akari_p1[1]+ _centery+mini2]
		let _xy_fo_akari4_inter4 = [0, this.mypy+this.door_p3[1]+ -_testymppy+ _centery]
		let _xy_fo_akari4_inter6 = [cnvs_wh, this.mypy+this.door_p3[1]+ -_testymppy+ _centery]
		let _xy_fo_akari4_interpoint =  qb.f_interlineseg(_xy_fo_akari4_nemoto,_xy_fo_akari4_sakipo,_xy_fo_akari4_inter4,_xy_fo_akari4_inter6)


		this.arr_akari_px = [ 
			this.mypx+this.hole_p1[0] + -_hishagex1+fo_akari4_zure,
			// this.mypx+ _akarimppx1+bukubuku, 
			this.mypx+this.akari_p9[0] , 
			this.mypx+this.akari_p3[0] + 366 , 
			this.mypx+ _akarimppx2,
			_xy_fo_akari4_interpoint[0]
			];
		this.arr_akari_py = [ 
			this.mypy+this.hole_p1[1]+ _centery,
			// this.mypy+this.akari_p7[1]+ _centery, 
			this.mypy+this.akari_p9[1]+ _centery, 
			this.mypy+this.akari_p3[1]+ _centery+mini2, 
			this.mypy+this.akari_p1[1]+ _centery+mini2,
			_xy_fo_akari4_interpoint[1]
			];

	}

}