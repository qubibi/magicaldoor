let vvvsss = `
	precision highp float;
	precision highp int;
	attribute vec3 aPosition;
	attribute vec2 aTexCoord;
	varying vec2 vTexCoord;
	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;
	void main() {
		vec4 positionVec4 = vec4(aPosition, 1.0);
		gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
		vTexCoord = aTexCoord;
	}
`;



let vvvfff = `
	precision highp float;
	precision highp int;

	varying vec2 vTexCoord;

	uniform sampler2D u_tex;
	uniform float time;
	uniform float radius_2;
	uniform float _blur1x;
	uniform float _blur1y;
	uniform float _fad;
	uniform float noisetuyosa;
	float pi = 3.14159265358979;

	float rand(vec2 co) {
		float a = fract(dot(co, vec2(2.067390879775102, 12.451168662908249))) - 0.5;
		float s = a * (6.182785114200511 + a * a * (-38.026512460676566 + a * a * 53.392573080032137));
		float t = fract(s * 43758.5453);
		return t;
	}
	vec3 blendOverlay(vec3 base, vec3 blend) {
		return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));
		// with conditionals, may be worth benchmarking
		// return vec3(
		//     base.r < 0.5 ? (2.0 * base.r * blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r)),
		//     base.g < 0.5 ? (2.0 * base.g * blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g)),
		//     base.b < 0.5 ? (2.0 * base.b * blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b))
		// );
	}

	void main() {




vec4 color = texture2D(u_tex, vTexCoord);

float radius = 4.;
vec2 ireso = vec2( 1. , 1.);
vec2 src_size = vec2 (1.0 / _blur1x, 1.0 / _blur1y);
vec2 uv = vTexCoord.xy/ireso.xy;
float n = float((radius + 1.) * (radius + 1.));
int i; 
int j;
vec3 m0 = vec3(0.0); vec3 m1 = vec3(0.0); vec3 m2 = vec3(0.0); vec3 m3 = vec3(0.0);
vec3 s0 = vec3(0.0); vec3 s1 = vec3(0.0); vec3 s2 = vec3(0.0); vec3 s3 = vec3(0.0);
vec3 c;

				for (int j = -4; j <= 0; ++j)  {
					for (int i = -4; i <= 0; ++i)  {
						c = texture2D(u_tex, uv+  vec2(i,j) * src_size).rgb;
						m0 += c;
						s0 += c * c;
					}
				}
				for (int j = -4; j <= 0; ++j)  {
					for (int i = 0; i <= 4; ++i)  {
					c = texture2D(u_tex, uv + vec2(i,j) * src_size).rgb;
					m1 += c;
					s1 += c * c;
					}
				}
				for (int j = 0; j <= 4; ++j)  {
					for (int i = 0; i <= 4; ++i)  {
					c = texture2D(u_tex, uv + vec2(i,j) * src_size).rgb;
					m2 += c;
					s2 += c * c;
					}
				}
				for (int j = 0; j <= 4; ++j)  {
					for (int i = -4; i <= 0; ++i)  {
					c = texture2D(u_tex, uv + vec2(i,j) * src_size).rgb;
					m3 += c;
					s3 += c * c;
					}
				}
				vec4 glcolor;
				float min_sigma2 = 1e+2;
				m0 /= n;
				s0 = abs(s0 / n - m0 * m0);
				float sigma2 = s0.r + s0.g + s0.b;
				if (sigma2 < min_sigma2) {
					min_sigma2 = sigma2;
					glcolor = vec4(m0, 1.0);
				}
				m1 /= n;
				s1 = abs(s1 / n - m1 * m1);
				sigma2 = s1.r + s1.g + s1.b;
				if (sigma2 < min_sigma2) {
					min_sigma2 = sigma2;
					glcolor = vec4(m1, 1.0);
				}

				m2 /= n;
				s2 = abs(s2 / n - m2 * m2);

				sigma2 = s2.r + s2.g + s2.b;
				if (sigma2 < min_sigma2) {
					min_sigma2 = sigma2;
					glcolor = vec4(m2, 1.0);
				}

				m3 /= n;
				s3 = abs(s3 / n - m3 * m3);

				sigma2 = s3.r + s3.g + s3.b;
				if (sigma2 < min_sigma2) {
					min_sigma2 = sigma2;
					glcolor = vec4(m3, 1.0);
				}


gl_FragColor =  mix(color, glcolor*0.5+vec4( blendOverlay(glcolor.rgb, color.rgb), 1.0)*0.5, _fad);



	}
`;