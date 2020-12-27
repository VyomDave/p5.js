function preload(){
  
}

function setup(){
   canvas = createCanvas(600 , 400)
   canvas.position(100 , 200)
   video = createCapture(VIDEO)
   video.hide()
   color = ""
}

function draw(){
  image(video , 0, 0, 600, 400)
  tint(color)
}

function apply_filter(){
    color = document.getElementById("color_input").value;

}

function take_snapshot(){
    save("mypicture.png")
}
