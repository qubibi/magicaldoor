class qb {
	static f_cRndmRGB() {
		let _randomColor = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")" ;
		return _randomColor;
	}
	static f_cRndmRGBA( _a = 1) {
		let _randomColor = "rgba(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) +","+_a+ ")" ;
		return _randomColor;
	}
	static f_cFxRGBA( _r1, _r2, _r3, _a = 1) {
		let _randomColor = "rgba(" + (~~(256 * _r1)) + ", " + (~~(256 * _r2)) + ", " + (~~(256 * _r3)) +","+_a+ ")" ;
		return _randomColor;
	}

	static f_cRndmHX() {
		let _randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
		return "#"+_randomColor;
	}

	static f_irokime(_arr, _alpha, _len) {
		for (let ii=0; ii<_len; ii++) {
			_arr[ii] = this.f_cRndmHX()+_alpha;
		}
	}
	static rndmmm(_min,_max) {
		return _min+(_max-_min)/2 + (Math.random()-.5)*(_max-_min);
	}
	static rndmr(_center,_range) {
		let _rnd = (  Math.random()+Math.random())/2.0;
		return _center + (_rnd-.5)  * (_range*2);
	}


	//tm += .02; tm %= 1;
	static mSin(_tm) {
		return Math.sin( 2 * Math.PI * _tm );
	}
	static mSquare(_tm) {
		return Math.sign( Math.sin( 2 * Math.PI * _tm ) )
	}
	static mTriangle(_tm) {
		return 1-4*Math.abs( Math.round(_tm-0.25)-(_tm-0.25) );
	}
	static mSawtooth(_tm) {
		return 2 * ( _tm - Math.floor( _tm + .5 ) );
	}







	// curveは正の値側で大きくなるほど、はじめがじっくり（遅い）
	// 逆側は負の値側、大きくなるほど、はじめから早くに上がる
	static mppng(x, x0, x1, y0, y1, curve = 0) {
		if (x0 > x1) {
			return mppng(x, x1, x0, y1, y0, curve);
		}
		if (x <= x0) {
			return y0;
		} else if (x >= x1) {
			return y1;
		} else {
			if (curve >= 0) {
				return Math.pow((x - x0) / (x1 - x0), 1 + curve) * (y1 - y0) + y0;
			} else {
				return Math.pow((x - x1) / (x0 - x1), 1 - curve) * (y0 - y1) + y1;
			}
		}
	}





	

	/**
	 * 上に凸関数
	 *
	 * x0 < x1 < x2 かつ y0 < y1 かつ y1 > y2 である設定値と変動値 x を受け取り、
	 * x == x1 の際には y1 が返り、
	 * x <= x0 の際には y0 が返り、
	 * x >= x2 の際には y2 が返り、
	 * その間をなだらかに補間する上に凸な関数
	 *
	 * @param smooth 丸め具合。0だと線形補間、1だと f(x) = -x^2 のカーブ
	 */
	static mppng_cu(x,  x0, x1, x2, y0, y1, y2, smooth=0.5) {
	// static convexUpward(x,  x0, x1, x2, y0, y1, y2, smooth=0.5) {
		var rangeX, rangeY;
		if (x < x1) {
			rangeX = x1 - x0;
			rangeY = y1 - y0;
		} else {
			rangeX = x2 - x1;
			rangeY = y1 - y2;
		}
		x = Math.abs((x - x1) / rangeX);
		return y1 - Math.min(Math.pow(x, 1 + smooth), 1) * rangeY;
	}


/**
 * 2点の線分（座標）から交点を求める
 * @param {{start:{x:number,y:number},end:{x:number,y:number}}} line1 1つ目の直線
 * @param {{start:{x:number,y:number},end:{x:number,y:number}}} line2 2つ目の直線
 * @return {{x:number,y:number}|false} 交点する座標を返し、平行の場合はfalseを返す
 * getIntersectionLineSegments
 */
static f_interlineseg(line1_sta, line1_end, line2_sta, line2_end) {
// static getIntersectionLineSegments(line1, line2) {
	var x0 = line1_sta[0],
	    y0 = line1_sta[1],
	    x1 = line1_end[0],
	    y1 = line1_end[1],
	    x2 = line2_sta[0],
	    y2 = line2_sta[1],
	    x3 = line2_end[0],
	    y3 = line2_end[1]
	// var x0 = line1.start.x,
	//     y0 = line1.start.y,
	//     x1 = line1.end.x,
	//     y1 = line1.end.y,
	//     x2 = line2.start.x,
	//     y2 = line2.start.y,
	//     x3 = line2.end.x,
	//     y3 = line2.end.y;

	var a0 = (y1 - y0) / (x1 - x0),
	    a1 = (y3 - y2) / (x3 - x2);

	var x = (a0 * x0 - y0 - a1 * x2 + y2) / (a0 - a1),
	    y = (y1 - y0) / (x1 - x0) * (x - x0) + y0;

	// if (Math.abs(a0) === Math.abs(a1)) return false;

	// if (x > Math.max(x0, x1) || x > Math.max(x2, x3) ||
	// 	y > Math.max(y0, y1) || y > Math.max(y2, y3) ||
	// 	x < Math.min(x0, x1) || x < Math.min(x2, x3) ||
	// 	x < Math.min(x0, x1) || y < Math.min(y2, y3) ) return false;

	return [x, y];
	// return { x : x, y : y };
};





}



