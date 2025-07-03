oto = {}
oto.setupCount = 0;  // oto_setupの実行回数を記録
function oto_setup() {
	oto.setupCount++;
	console.log("oto_setup() executed - count:", oto.setupCount);
	
	// 2回目以降の実行を防ぐ
	if (oto.setupCount > 1) {
		console.warn("oto_setup() already executed, skipping...");
		return;
	}
	
	au_music.volume = 0;
	au_music.play(0.1, Math.round(qb.rndmmm(0,30)) );
	if (ososos=="pc") {
		oto.reverb = new Pizzicato.Effects.Reverb({
		time: 4.66,
		decay: 4.0,
		reverse: false,
		mix: .28
	});
	} else {
		oto.reverb = new Pizzicato.Effects.Reverb({
		time: 4.0,
		decay: 4.0,
		reverse: false,
		mix: .28
	});
	}
	
	au_musicgroup.addEffect(oto.reverb);
	
	oto.kisimi = 0;
	oto.kisimi_tgt = 0;
	oto.kisimi_mul = 1;
	oto.kisimi_multgt = 1;
}

let volumemag = 0;


function f_oto_reset() {
	if (ongakunatteru!=0) {
		au_music.disconnect();
		au_music.buffer = null;
		au_musicgroup.disconnect();
		au_musicgroup.buffer = null;
	}
}
function f_savemode_kaijo_karano_otostart() {
	if (ongakunatteru!=0) {

		au_music = new Pizzicato.Sound({ 
			source: 'file',
			options: { 
				path: ['imp/schumann3.mp3'],
				loop:true
			}
		}, function() {
			cc_effstart = 0;
			is_forcc_effstart = true;
			au_musicgroup = new Pizzicato.Group([au_music]);
			au_music.play(0.1, Math.round(qb.rndmmm(0,30)) );

		});
	}
}
function f_savemode_kaijo_karano_eff() {
	if (ososos=="pc") {
	oto.reverb = new Pizzicato.Effects.Reverb({
	time: 4.66,
	decay: 4.0,
	reverse: false,
	mix: .28
	});
	} else {
	oto.reverb = new Pizzicato.Effects.Reverb({
	time: 4.0,
	decay: 4.0,
	reverse: false,
	mix: .28
	});
	}

	au_musicgroup.addEffect(oto.reverb);
	is_forcc_effstart = false;
}







function oto_ef() {

	if (is_goreload) {
		if (volumemag>0) volumemag+= -0.05;
		else volumemag = 0;

	} else {
		if (volumemag<1) volumemag+=0.01;
		else volumemag = 1;
	}
	if (is_sound) Pizzicato.volume = 1*volumemag;
	else Pizzicato.volume = 0;
	let _amp = qb.mppng(door_openclose_v,   0, .25,  0, 1, 0)*ongakunatteru;
	au_music.volume= _amp;

	if (omoi) {
		if (Math.random() < .057) oto.kisimi_tgt = qb.rndmmm(.55,.99);
		if (Math.random() < .05) oto.kisimi_tgt = 0;
	} else {
		if (Math.random() < .057) oto.kisimi_tgt = qb.rndmmm(.4,.8);
		if (Math.random() < .07) oto.kisimi_tgt = 0;
	}
	

	oto.kisimi += (oto.kisimi_tgt - oto.kisimi) / 5;

	if (Math.abs(nyu.door_mspd) < 1) oto.kisimi_multgt = 0
	else oto.kisimi_multgt = 1
	oto.kisimi_mul += (oto.kisimi_multgt - oto.kisimi_mul) / 1.5
	let _audoorv = oto.kisimi*oto.kisimi_mul;
	if (_audoorv>1) _audoorv = 1
	au_door1.volume = _audoorv;
	au_door2.volume = _audoorv;
}

function oto_dooromoi() {
	if (Math.random()<.5) {
		au_door1.play(0, qb.rndmmm(0,1))
	} else {
		au_door2.play(.15, qb.rndmmm(0,3))
	}

}

function oto_dooropen(_tuyosa) {
	let _tuyosa_ed = Math.abs(_tuyosa)

	au_dooropen.stop()
	let _vvv = .1+_tuyosa_ed*(qb.rndmmm(7,9))
	if (_vvv>1)_vvv = 1;
	au_dooropen.volume = _vvv;
	au_dooropen.play()
	au_dooropen.sourceNode.playbackRate.value = qb.rndmmm(.91,1.06);
	
	if (Math.random()<.5) {
		au_door1.play(0, qb.rndmmm(0,1))
	} else {
		au_door2.play(.15, qb.rndmmm(0,3))
	}
	
	zawazawa_mul_tgt = 1;
}

function oto_doorclose(_tuyosa) {
	let _tuyosa_ed = Math.abs(_tuyosa)
	let _rnd1 = qb.rndmmm(.2, .35)
	let _rnd2 = qb.rndmmm(0,  .1)
	let _ontei =qb.rndmmm(.9, 1.1)
	if (_tuyosa_ed < 0.0107) {
		au_doorclose_light.stop();
		au_doorclose_light.play();
		au_doorclose_light.sourceNode.playbackRate.value = qb.rndmmm(1,1.1);
		let _light = .1+_tuyosa_ed*10
		if (_light>1)_light=1
		au_doorclose_light.volume = _light;
		if (mgclid1==0)zawazawa_mul_tgt = zawazawa_mul = .34;
		else zawazawa_mul_tgt = zawazawa_mul = .1;
		
	} else {
		let _v1 = qb.mppng(_tuyosa_ed,0, .35,    _rnd1, 1, .7)
		let _v2 = qb.mppng(_tuyosa_ed,0, .35,    _rnd2, 1.2, .9)
		if (_v1>1)_v1 = 1
		if (_v2>1)_v2 = 1
		if (_tuyosa_ed > .35) {
			
			au_doorclose.stop();
			au_doorclose_strong.stop();
			au_doorclose.play(0, .1)
			au_doorclose.sourceNode.playbackRate.value = _ontei;
			au_doorclose.volume = _v1;
			au_doorclose_strong.play(0, .1)
			au_doorclose_strong.sourceNode.playbackRate.value = _ontei;
			au_doorclose_strong.volume = _v2*1.5;
		} else {
			au_doorclose.stop();
			au_doorclose_strong.stop();
			au_doorclose.play(0,0);
			au_doorclose.volume = _v1;
			au_doorclose.sourceNode.playbackRate.value  = _ontei;
			au_doorclose_strong.play(0,0);
			au_doorclose_strong.volume = _v2;
			au_doorclose_strong.sourceNode.playbackRate.value  = _ontei;
		}
	}
	au_music.volume = 0;
}


