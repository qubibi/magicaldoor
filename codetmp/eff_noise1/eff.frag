//https://github.com/spite/Wagner/tree/master/fragment-shaders

   precision highp float;
   precision highp int;

   varying vec2 vTexCoord;

	uniform sampler2D u_tex;
	uniform float time;
	uniform float radius;
	uniform float noisetuyosa;
   float pi = 3.14159265358979;

   float rand(vec2 co) {
	 float a = fract(dot(co, vec2(2.067390879775102, 12.451168662908249))) - 0.5;
	 float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));
	 float t = fract(s * 43758.5453);
	 return t;
   }
	vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
		return (value - 0.5) * contrast + 0.5 + brightness;
	}
	vec3 Gamma(vec3 value, float param) {
		return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));
	}


   void main() {
		vec2 uvnoise = vTexCoord;
		float n1 = rand((uvnoise * time) * 10.0);
		float n2 = rand((uvnoise * (time*.66)) * 10.0);
		float n3 = rand((uvnoise * (time*.33)) * 10.0);
		vec3 eff1 = Gamma(vec3(n1,n2,n3), 36.6);
		vec4 noisetex = vec4(eff1, 1.0);

		vec2 uv = vTexCoord;

		uv.x = uv.x + rand(uv*time)*radius;
		uv.y = uv.y + rand(uv*time)*radius;
		
		vec4 tex = texture2D(u_tex, uv) + (noisetex*noisetuyosa);

		gl_FragColor = vec4( brightnessContrast( tex.rgb , 0.0, 1.2), 1.0);
		// gl_FragColor = vec4( brightnessContrast( tex.rgb , 0.0, 1.0), 1.0);
	}