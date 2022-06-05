

if (false) {

// setShaders = function() {
var vertexShader = `
// beginGLSL
#ifdef GL_ES
precision mediump float;
#endif
// our vertex data
attribute vec3 aPosition;
// our texcoordinates
attribute vec2 aTexCoord; 
// this is a variable that will be shared with the fragment shader
// we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader
// it can be called whatever you want but often people prefix it with 'v' to indicate that it is a varying
varying vec2 vTexCoord;
// 
void main() {
  // copy the texture coordinates
  vTexCoord = aTexCoord;
  // copy the position data into a vec4, using 1.0 as the w component
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  // send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}
// endGLSL
`;
var fragmentShader = `
// beginGLSL
#ifdef GL_ES
precision mediump float;
#endif
precision mediump float;
// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;
void main() {
  // copy the vTexCoord
  // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
  // we can use it to access every pixel on the screen
  vec2 coord = vTexCoord; 
  // x values for red, y values for green, both for blue
  gl_FragColor = vec4(coord.x, coord.y, (coord.x+coord.y), 1.0 );
}
// endGLSL
`;
// theShader = loadShader('uniform.vert', 'uniform.frag');
// theShader = new p5.Shader(p5.RendererGL, vertexShader, fragmentShader);
theShader = createShader(vertexShader, fragmentShader);


};
// }

