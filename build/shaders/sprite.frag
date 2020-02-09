varying vec2 v_uv;

uniform sampler2D image;
uniform sampler2D palette;
uniform vec2 size;

void main() {
    float index = texture2D(image, v_uv).a;
    vec4 paletteColour = texture2D(palette, vec2(index,0));

	gl_FragColor = paletteColour;
}
