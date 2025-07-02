// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()
let fxrand_fst = fxrand()
console.log( fxrand_fst )
// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

let zoomtype = [1,  1];
let str_fxrand_fst = String(fxrand_fst);
let mgclid1 = Number(str_fxrand_fst.charAt(5)) // sen
let mgclid2 = Number(str_fxrand_fst.charAt(6)) // door katati
let mgclid3 = Number(str_fxrand_fst.charAt(7)) // color
let mgclid4 = Number(str_fxrand_fst.charAt(8)) // akari
let mgclid5 = Number(str_fxrand_fst.charAt(9))  // intra


/// line
/// line
/// line
/// line
/// line
/// line
// mgclid1 = 1



let senhutosa_mag = 1;
let senhutosa_mag_yura = 1;
let bukubuku = 0;
let hosoitokino_sukima = 0
let hosoitoki = 0
let hutoitokinodon = 0
let fo_akari4_zure = 15;
let hutoitoki_yukahikari = 0
if (mgclid1 ==0) {
	senhutosa_mag = 2.1;
	bukubuku = 30;
	zoomtype = [1.2,1.2]
	hutoitokinodon = 40
	fo_akari4_zure = 28;
	hutoitoki_yukahikari = -13
} else if (mgclid1 == 1) {
	fo_akari4_zure = 7;
	senhutosa_mag = .49;
	senhutosa_mag_yura = .25
	hosoitokino_sukima = -2.5	
	hosoitoki = -0.23
}
let is_doorga_hosoi = false
if (fxrand()<.07) is_doorga_hosoi = true
let sengap = qb.mppng(senhutosa_mag, .75, 2.2,  5, 20);
if (!is_doorga_hosoi && fxrand()<.07) sengap+=6

// sengap = 10
let doortakasa = 410
let doorhaba = 200



//color
//color
//color
//color
//color
let _cola_mag = .925;
let colfad = .0
let arr_keycol = ["#000000af", "#c7e364f5", "#249693ff", "#ed9a9cff", "#ed9a9cff"]
arr_keycol[4] =  qb.f_cFxRGBA(fxrand(), fxrand(), fxrand(), 1); //bg1
arr_keycol[2] =  qb.f_cFxRGBA(fxrand()*.8, fxrand()*.8, fxrand()*.8, .89); //door
let _bgr = fxrand()
let _bgg = fxrand()
let _bgb = fxrand()
if(_bgr < .33 && _bgg > .77 && _bgb < .33) {
	_bgr = fxrand();	_bgg = fxrand();	_bgb = fxrand()
}
if(_bgr > .6 && _bgg < .3 && _bgb > .6) {
	_bgr = fxrand();	_bgg = fxrand();	_bgb = fxrand()
}

arr_keycol[0] =  qb.f_cFxRGBA(_bgr*.95, _bgg*.95, _bgb*.95, .85*_cola_mag); //bg2
arr_keycol[3] =  qb.f_cFxRGBA(fxrand(), fxrand(), fxrand(), 1); //knob

let _forakari = fxrand()
if (mgclid4==0) {
	if ( _forakari<.2 ) {
		arr_keycol[1] = "rgba(0,255,0,"+_cola_mag+")"
	} else if ( _forakari<.5 ) {
		arr_keycol[1] = "rgba(255,0,0,"+_cola_mag+")"
		arr_keycol[0]  = qb.f_cFxRGBA(fxrand()*.3, fxrand()*.3, fxrand()*.3, 1*_cola_mag); //bg2
	} else if ( _forakari<=1 ) {
		arr_keycol[1] = "rgba(255,255,255,"+_cola_mag+")";
	}
} else {
	if (_forakari<.25) {
		arr_keycol[1] = "rgba(255,255,36,"+_cola_mag+")"
	} else if  (_forakari<.5) {
		arr_keycol[1] = "rgba(247,120,255,"+_cola_mag+")"
	} else if  (_forakari<.75) {
		arr_keycol[1] = "rgba(195,227,100,"+_cola_mag+")"
	} else if  (_forakari<=1) {
		arr_keycol[1] = "rgba(100,255,199,"+_cola_mag+")"
	}
}
if (fxrand()<.07) arr_keycol[4] = arr_keycol[1]
if (fxrand()<.3) {
	arr_keycol[0] = "#000000ac"
	arr_keycol[4] =  qb.f_cFxRGBA(.3+fxrand()*.7, .3+fxrand()*.7, .3+fxrand()*.7, 1);
}
colfad = (fxrand()*fxrand())*.65
let saido = -0.22
let contra = 1.48
if (fxrand()<.55) {
	if (fxrand()<.5) {
		saido = -0.72; contra = 1.88
	} else {
		saido = 1.6; contra = 0.4
	}
}
if (fxrand()<.01) {
	saido = -.97; contra = 2
}

//shape
//shape
//shape
//shape
//shape
//shape
//shape
let katamuki = 0;
let katamuki2 = 0;
let mini1 = 0
let mini2 = 0
let mini3 = 0
let fxrandfxrand = fxrand()*fxrand();
if (mgclid2==0) doortakasa = 530
else {
	doortakasa = 390+fxrand()*70
}
if (fxrand()<.1) {
	let _fffxxx = Math.round(fxrandfxrand*110)
	if (fxrand()<.5) {katamuki = 22+_fffxxx;	katamuki2 = 22+_fffxxx}
	else {katamuki = -22-_fffxxx;	katamuki2 = -22-_fffxxx}
} 
if (mgclid2==1) {
	doortakasa = 250+fxrand()*77
	doorhaba = 130
	mini1 = -50;	mini2 = 166;	mini3 = 7
}

let weight_door_mag = .77;
if (fxrand()<.3) weight_door_mag = 1.3

suityoku_skm = 13+fxrand()*4 + qb.mppng(senhutosa_mag, .8, 2.3,  0, 10);
if (mgclid1==1)suityoku_skm=5+fxrand()*4 + qb.mppng(senhutosa_mag, .8, 2.3,  0, 10);
is_hanten =false;
if (fxrand()<.1) is_hanten = true
let knobiti = 0;
if (fxrand()<.03) knobiti = fxrand()*300-150

//intr
//intr
//intr
//intr
//intr
let autoclosetime = 1100; //rndm ni naru
let sugusimaru = 1100
let ongakunatteru = 1;
let holeari = true
let omoi = false
let mgclid5_rand = fxrand()
let is_katteniaku = false



if (mgclid5==0) {
	// oto naranai
	if (mgclid5_rand< .18) { // id ga 0 notoki katu rand .33 ikano toki
		arr_keycol[1] = "rgba(0,0,0,0)"
		ongakunatteru = 0;
		let _mgclid5_rand_rand = fxrand()
		if (_mgclid5_rand_rand<.15) {
			holeari = false
			arr_keycol[4] = arr_keycol[0]
		} else if (_mgclid5_rand_rand<.3) {
			// omoi
			omoi = true
		}
	}
} else if (mgclid5==1) {
	// 	sugu simaru
	if (fxrand()<.2) { // id ga 1 notoki katu rand .1 ikano toki
		if (fxrand()<.5) {
			if (fxrand() < .1 ) sugusimaru = autoclosetime = 3
			else sugusimaru = autoclosetime =10
		} else sugusimaru = autoclosetime = 25
	}
} else if (mgclid5==2) {
	if (fxrand()<.66) is_katteniaku = true
	// if (fxrand()<.66) is_katteniaku = true
}
