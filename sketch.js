// a shader variable
let theShader;
let socket = io.connect('http://localhost:8080');
 
function preload() {
  // load the shader
  theShader = loadShader('uniform.vert', 'uniform.frag');
}

function setup() {
 // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  // setShaders();
  noStroke();
      window.setTimeout(function() {
        if (!keysActive) {
            cmArea.style.width = "1200px";
            jsCmArea.style.width = "1200px";
            jsConsoleArea.setAttribute("style", "display:block;");
            scdArea.style.display = "none";
            scdConsoleArea.setAttribute("style", "display:none;");
            jsCmArea.style.height = "685px";
            jsArea.style.display = "block";
            displayMode = "js";
            autoRedraw = true;
        }
    }, 1000);
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // here we're using setUniform() to send our uniform values to the shader
  // set uniform is smart enough to figure out what kind of variable we are sending it,
  // so there's no need to cast (unlike processing)
  theShader.setUniform("u_resolution", [600, 600]);
  theShader.setUniform("u_time", millis() / 5000.0);

  // rect gives us some geometry on the screen
  rect(0,0,width,height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
