
let ososos;
let is_forhicetnunc = false;

ososos = detectOSSimply();
function detectOSSimply() {
	let ret;
	if (
		navigator.userAgent.indexOf("iPhone") > 0 ||
		navigator.userAgent.indexOf("iPad") > 0 ||
		navigator.userAgent.indexOf("iPod") > 0
	) {
		
		ret = "iphone";
	} else if (navigator.userAgent.indexOf("Android") > 0) {
		ret = "android";
	} else {
		ret = "pc";
	}
	return ret;
}

if (!is_forhicetnunc) {

	
	function f_usertouchstart_soundbtn_on() {
		
		document.querySelectorAll('#soundonoff img')[0].src="./imptmp/sound_on.svg";
	}
	function f_soundonoff_from_btn() {
		f_usertouchstart()
		// if (is_sound) {
		// 	if (cc_user_started > 10) {
		// 		document.querySelectorAll('#soundonoff img')[0].src="./imptmp/sound_off.svg";
		// 		is_sound = false;
		// 	}
		// } else {
		// 	document.querySelectorAll('#soundonoff img')[0].src="./imptmp/sound_on.svg";
		// 	is_sound = true;
		// }
	}
}

