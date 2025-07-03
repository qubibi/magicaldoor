

nyu = {}
function nyu_setup() {
	nyu.now_oa = 0;
	nyu.now_ob = 0;
	nyu.now_og = 0;
	nyu.now_mx = 0;
	nyu.now_my = 0;
	nyu.now_mz = 0;
	nyu.now_hx = 0;
	nyu.now_hy = 0;
	nyu.now_edhy = 0;

	nyu.now_tx = 0;
	nyu.now_ty = 0;
	nyu.bef_tx = 0;
	nyu.bef_ty = 0;
	nyu.diff_tx = 0;
	nyu.diff_ty = 0;
	nyu.sta_tx = 0;
	nyu.sta_ty = 0;
	nyu.end_tx = 0;
	nyu.end_ty = 0;
	nyu.tdir4 = 0;

	nyu.puramai = 1;
	nyu.door_mspd = 0;
	nyu.is_door_open = false;	
	nyu.door_mspd_amari = 0;
	nyu.door_mspd_amari2 = 0;

	nyu.cc_door_openchu = 0;
	nyu.cc_door_closechu = 0;
	nyu.cc_forsavemode = 0;
	nyu.cc_press = 0;
	nyu.katteniaityau = false
	nyu.cc_katteniaityau = 100
	nyu.katteniaku = 4.2
}


function nyu_ef() {
	
	// if (nyu.cc_forsavemode==2000 ) {
		// if (ososos=="pc") pixelDensity(0.3);
		// else pixelDensity(0.3);
		// frameRate(7)
	// }


	nyu_kihon();
if (is_user_started && is_katteniaku) {
	if(door_openclose_v <= 0 && Math.random()<.045) {
		nyu.puramai = 1;
		nyu.katteniaku = 3.2+(Math.random()*Math.random())*40
		nyu.diff_ty = nyu.katteniaku;
		nyu.diff_tx = 0;
		nyu.bef_ty = 402
		nyu.now_ty = 405
		is_press = true;
		nyu.katteniaityau = true;
		nyu.cc_katteniaityau = 0;
	}
	nyu.cc_katteniaityau += 1;
	if  (nyu.cc_katteniaityau<3) {
		nyu.diff_ty = nyu.katteniaku;
		nyu.diff_tx = 0;
		nyu.bef_ty = 402
		nyu.now_ty = 405
	}
	if (nyu.cc_katteniaityau ==3) {
		is_press = false
		nyu.katteniaityau = false;
		nyu.diff_ty = 0;
		nyu.bef_ty = 0
		nyu.now_ty = 0
	}
}
	


	if (!is_kyoseiakanai) {
		if (is_press) {
			
				if ( Math.abs(nyu.diff_ty) >= Math.abs(nyu.diff_tx)) {
					nyu.tdir4 = (nyu.bef_ty < nyu.now_ty) ? true : false;
					nyu.door_mspd = nyu.diff_ty;
				} else if ( Math.abs(nyu.diff_tx) > Math.abs(nyu.diff_ty)) {
					if (is_hanten) {
						nyu.tdir4 = (nyu.bef_tx > nyu.now_tx) ? false : true;
						nyu.door_mspd = nyu.diff_tx;
					} else {
						nyu.tdir4 = (nyu.bef_tx > nyu.now_tx) ? true : false;
						nyu.door_mspd = -nyu.diff_tx;
					}
					
				}
			// nyu.door_mspd = nyu.diff_ty;
		}

		if (is_autoclose) {
			nyu.puramai = 1;
			nyu.tdir4 = false;
			nyu.door_mspd = -66 +qb.rndmmm(0,55);
			// nyu.door_mspd = -66;
		}

	}



	if (nyu.door_mspd > 222) nyu.door_mspd = 222;
	else if (nyu.door_mspd < -222) nyu.door_mspd = -222;


	if (omoi ) nyu.door_mspd *= 0.11;
	else nyu.door_mspd *= 0.98;
	let _door_mspd_edit = nyu.door_mspd / 611 * nyu.puramai;
	// // openclosev = qb.mTriangle(tm)/2+.5;
	door_openclose_v += _door_mspd_edit;
	// door_openclose_v = sineha;
	

	if (door_openclose_v<0) {
		
		door_openclose_v = 0;
		nyu.puramai = 1;
		nyu.door_mspd_amari = Math.abs(nyu.door_mspd/3);
		nyu.door_mspd_amari2 = Math.abs(nyu.door_mspd*5.33);
		nyu.door_mspd = 0;
	}
	if (door_openclose_v>1) {
		door_openclose_v = 1;
		if (!is_press) {
			nyu.puramai = -1;
			nyu.door_mspd *= .6;
		}
	}
	if (is_press && nyu.tdir4 && door_openclose_v <= .3) {
		if (!nyu.is_door_open) {
			nyu.is_door_open = true;
			oto_dooropen(_door_mspd_edit)
		}
	}
	if (_door_mspd_edit <0 && door_openclose_v <= .02) {
		if (nyu.is_door_open) {
			nyu.is_door_open = false;
			oto_doorclose( _door_mspd_edit)
			if (mgclid5==1) autoclosetime = sugusimaru
			else autoclosetime = Math.round( (800 - (Math.random()*Math.random())*750)*2.0 )

		}
	}
	nyu.door_mspd_amari *= .845
	nyu.door_mspd_amari2 *= .86
	if (nyu.door_mspd_amari2>27+hutoitokinodon) nyu.door_mspd_amari2 = 27+hutoitokinodon


	f_savemode_and_autodoor() 

}

function f_savemode_and_autodoor() {
	// console.log(nyu.cc_forsavemode )
	if (cc_no_savemode> 2131) is_autoclose = true
	if (nyu.cc_door_openchu > autoclosetime) {
		is_autoclose = true;
	}
	
	if (nyu.is_door_open == false) {
		
		// console.log(autoclosetime);
		is_autoclose = false;
		nyu.cc_door_openchu = 0
		nyu.cc_door_closechu += 1;
		nyu.cc_forsavemode += 1;
		if (nyu.cc_forsavemode == savemodetime ) {
			f_savemode(true)
		}
		
		if (cc_no_savemode > 2331) {
			// f_savemode(true);
		}
	} else {
		nyu.cc_door_openchu += 1;
		nyu.cc_door_closechu = 0;
		nyu.cc_forsavemode = 0;
		if (is_savemode) {
			f_savemode(false)
		}
	}
	// console.log(nyu.cc_door_openchu);
}


function nyu_kihon() {
	// 最初のタップが完了するまで、すべての入力処理をスキップ
	if (!is_interaction_enabled || !is_first_touch_done) return;
	
	if (is_press) {
		
		if (omoi) oto_dooromoi()
		nyu.bef_tx = nyu.now_tx;
		nyu.bef_ty = nyu.now_ty;
		if (ososos=='pc') {
			nyu.now_tx = mouseX;
			nyu.now_ty = mouseY;
		} else {
			// touches配列の安全なチェック
			if (touches && touches.length > 0 && touches[0]) {
				if (touches[0].x !== undefined && touches[0].y !== undefined) {
					nyu.now_tx = touches[0].x;
					nyu.now_ty = touches[0].y;
				}
			}
		}
		nyu.diff_tx = nyu.now_tx - nyu.bef_tx
		nyu.diff_ty = nyu.now_ty - nyu.bef_ty
		
	}
	if (ososos=='pc') {

		let _dist = Math.hypot(mouseX - nyu.now_hx, mouseY - nyu.now_hy);
		if (_dist > 200) {
			nyu.now_hx += (mouseX - nyu.now_hx) / 15
			nyu.now_hy += (mouseY - nyu.now_hy) / 15
		}
		nyu.now_edhy = mouseY - nyu.now_hy;
		if (nyu.now_edhy > 200) nyu.now_edhy = 200; 
		else if (nyu.now_edhy < -200) nyu.now_edhy = -200; 
		// nyu.now_hx = mouseX;
		// nyu.now_hy = mouseY;
	}
}

function mousePressed() {
	if (!is_interaction_enabled) return;
	
	// 0.29秒後、最初のタップで完全にインタラクション有効化
	if (is_interaction_ready && !is_first_touch_done) {
		is_first_touch_done = true;
	}
	
	if (ososos=='pc') {
		f_usertouchstart();
		nyu.now_tx = nyu.sta_tx = mouseX;
		nyu.now_ty = nyu.sta_ty = mouseY;
		nyu.puramai = 1;
		is_press = true;
		// nyu.cc_forsavemode = 0;
		nyu.cc_press += 1;

		if (is_savemode && nyu.cc_forsavemode > 0) {
			nyu.cc_forsavemode = 0;
			f_savemode(false)
		}

	}	
}

function mouseReleased() {
	if (!is_interaction_enabled) return;
	if (ososos == 'pc') {
		is_press = false;
		nyu.cc_press = 0;
	}
}

function touchStarted() {
	if (!is_interaction_enabled) return;
	
	// 0.29秒後、最初のタップで完全にインタラクション有効化
	if (is_interaction_ready && !is_first_touch_done) {
		is_first_touch_done = true;
	}
	
	if (ososos != 'pc') { 
		if (!is_user_started) f_usertouchstart();	
		// touches配列の安全なチェック
		if (touches && touches.length > 0 && touches[0]) {
			if (touches[0].x !== undefined && touches[0].y !== undefined) {
				nyu.now_tx = nyu.sta_tx = touches[0].x;
				nyu.now_ty = nyu.sta_ty = touches[0].y;
			} else {
				console.log("Touch coordinates undefined");
			}
		} else {
			console.log("No valid touches detected");
		}
		nyu.puramai = 1;
		is_press = true;
		nyu.cc_press += 1;

		if (is_savemode && nyu.cc_forsavemode > 0) {
			nyu.cc_forsavemode = 0;
			f_savemode(false)
		}

	}
}
function touchEnded(){
	if (!is_interaction_enabled) return;
	if (ososos != 'pc') {
		is_press = false;
		nyu.cc_press = 0;
	}
}

// p5.jsのデフォルトタッチムーブハンドラをオーバーライド
function touchMoved() {
	// インタラクションが有効になるまで、デフォルトの動作を防ぐ
	if (!is_interaction_enabled || !is_first_touch_done) {
		return false; // p5.jsに伝播を止めるよう指示
	}
	// 通常のタッチムーブ処理はnyu_kihon()で行う
}

// p5.jsのデフォルトマウスドラッグハンドラもオーバーライド
function mouseDragged() {
	// インタラクションが有効になるまで、デフォルトの動作を防ぐ
	if (!is_interaction_enabled || !is_first_touch_done) {
		return false; // p5.jsに伝播を止めるよう指示
	}
	// 通常のドラッグ処理はnyu_kihon()で行う
}
