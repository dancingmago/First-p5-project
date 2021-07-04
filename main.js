function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 10, 10, 620, 460);
    circle(15, 15, 30);
    circle(15, 465, 30);
    circle(625, 15, 30);
    circle(625, 465, 30);

    rect(5, 30, 15, 420);
    rect(620, 30, 15, 420);
    rect(30, 5, 580, 15);
    rect(30, 460, 580, 15);
}
function take_snapshot(){
    save("student_name.png");
}