/*
 * @name Applying Shaders as Textures
 * @description Shaders can be applied to 2D/3D shapes as textures. 
 * To learn more about shaders and p5.js: https://itp-xstory.github.io/p5js-shaders/
 */

let theShader;
let shaderTexture;

let theta = 0;

let x;
let y;
let outsideRadius = 200;
let insideRadius = 100;

let contador = 1;

var tamango = 20;
var dato = 1;


function preload() {
    // load the shader
    theShader = loadShader('uniform.vert', 'uniform.frag');
}

function setup() {
    // disables scaling for retina screens which can create inconsistent scaling between displays
    //pixelDensity(1);
    // shaders require WEBGL mode to work
    createCanvas(windowWidth, windowHeight, WEBGL);
    //noStroke();
    background(224, 218, 204);

    // initialize the createGraphics layers
    shaderTexture = createGraphics(400, 400, WEBGL);

    // turn off the createGraphics layers stroke
    shaderTexture.noStroke();

    x = -50;
    y = 0;
}

function draw() {

    contador++;


    if (contador >= 20000) {
        window.location.reload();
    }

    // instead of just setting the active shader we are passing it to the createGraphics layer
    shaderTexture.shader(theShader);

    // here we're using setUniform() to send our uniform values to the shader
    theShader.setUniform("resolution", [width, height]);
    theShader.setUniform("time", millis() / 500.0);
    theShader.setUniform("mouse", [mouseX, map(mouseY, 0, height, height, 0)]);

    // passing the shaderTexture layer geometry to render on
    shaderTexture.rect(0, 0, width, height);


    //pass the shader as a texture
    texture(shaderTexture);


    var bruitX = 0.0001;
    var bruit_x = noise(millis() * bruitX) * 157;

    var bruitY = 0.0003;
    var bruit_y = noise(millis() * bruitY) * 157;

    var bruitX1 = 0.0001;
    var bruit_x1 = noise(millis() * bruitX1) * 157;

    var bruitY1 = 0.0002;
    var bruit_y1 = noise(millis() * bruitY1) * 157;

    var bruitsize = 0.0001;
    var bruit_size = noise(millis() * bruitsize) * 150;


    rotateZ(millis() / 4000);
    rotateX(millis() / 3300);
translate(bruit_x1, bruit_y1, bruit_y1);

    let ellipseFidelity = int(map(mouseX, 0, width, 0, 100));
    ellipse(bruit_x, bruit_y, bruit_size, bruit_size, 100);




}