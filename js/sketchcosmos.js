var cosmos_old_cursor_x=[];
var cosmos_old_cursor_y=[];
var cosmos_cursor_x=[];
var cosmos_cursor_y=[];
var cosmos_angle=0;
var cosmos_w=3.14/180;
var cosmos_r=5;
var cosmos_handdraw=0;
var cosmos_a=1;
var cosmos_b=1;
var cosmos_c=0;
var cosmos_d=0;
var cosmos_z=1/50;
var cosmos_y=1/40;

var window_Height;
var window_Width;




function preload(){
  sound = loadSound('audio/theme of universe.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  window_Width=windowWidth;
  window_Height=windowHeight;
  var top = window_Height/2*(-1);
  var left = window_Width/2*(-1);
  var homeCanvas=select('#defaultCanvas');
  homeCanvas.style("margin-top", top);
  homeCanvas.style("margin-left", left);
  
  frameRate(60);
  sound.amp(1);
  sound.loop();
  fft = new p5.FFT(0.99,16);
  noFill();
  strokeJoin(ROUND);
  strokeCap(ROUND);

}


function draw() {
    var waveform = fft.waveform();
    var vol = sound.getLevel();
    strokeWeight(vol/3);


//    console.log(vol);
    for(j=0;j<=waveform.length;j++){
      cosmos_old_cursor_x[j] = cosmos_cursor_x[j];
      cosmos_old_cursor_y[j] = cosmos_cursor_y[j];
    }


    if(r<80){
      cosmos_a+=random(-0.0008,0.0008);
      cosmos_b+=random(-0.0008,0.0008);


      for(i=0;i<=waveform.length;i++){
        stroke(0,0,0,120);
        cosmos_handdraw+=random(-0.08,0.08);

          cosmos_cursor_x[i] = cosmos_b*(cosmos_r+random(-5-cosmos_r/50,5+cosmos_r/50)+cosmos_handdraw)*cos(cosmos_angle)+window_Width/2;
          cosmos_cursor_y[i] = cosmos_a*(cosmos_r+random(-5-cosmos_r/50,5+cosmos_r/50)+cosmos_handdraw)*sin(cosmos_angle)+window_Height/2;  
          line(cosmos_old_cursor_x[i],cosmos_old_cursor_y[i],cosmos_cursor_x[i],cosmos_cursor_y[i]);  


      }
    cosmos_r+=cosmos_z;
    cosmos_z-=1/600000;  
    }
    if(cosmos_r>80){

      if(cosmos_c==0){
        cosmos_a+=0.0008;
      }
      if(cosmos_a>=1.4){
        cosmos_c=1;
      }
      if(cosmos_c==1){
        cosmos_a=1.4;
      }
      if(cosmos_d==0){
        cosmos_b-=0.001;
      }
      if(cosmos_b<=0.25){
        cosmos_d=1;
      }
      if(cosmos_d==1){
        cosmos_b=0.25;
      }

      for(i=0;i<=waveform.length;i++){
        stroke(0,0,0,80);
        cosmos_handdraw+=random(-0.16,0.16);

          cosmos_cursor_x[i] = cosmos_a*(cosmos_r+random(-8-cosmos_r/50,8+cosmos_r/50)+cosmos_handdraw)*cos(cosmos_angle)+window_Width/2;
          cosmos_cursor_y[i] = cosmos_b*(cosmos_r+random(-8-cosmos_r/50,8+cosmos_r/50)+cosmos_handdraw)*sin(cosmos_angle)+window_Height/2;  
          line(cosmos_old_cursor_x[i],cosmos_old_cursor_y[i],cosmos_cursor_x[i],cosmos_cursor_y[i]);  


      }
    cosmos_r+=cosmos_y;
    cosmos_y-=1/600000;   
    }


    cosmos_angle+=1.5/cosmos_r;

    
    


}


