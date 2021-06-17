dog_cat = ""
status = ""
function preload(){
    dog_cat = loadImage("dog_cat.jpg")
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded)
document.getElementById("status").innerHTML = "Status: Detecting Objects with a Box."
}
function modelLoaded(){
    console.log("Model Loaded.")
status = true;
objectDetector.detect(dog_cat, gotResults)
}
function gotResults(error, results){
 if(error){
     console.log(error)
 }
 else{
     console.log(results)
     document.getElementById("status").innerHTML = "Status: Objects have been detected in console."
 }
}
function draw(){
    image(dog_cat, 0, 0, 640, 420)
    fill("#8B0000")
    text("Dog", 152, 104)
    noFill()
    stroke("#8B0000")
    rect(30, 54, 550, 350)
    text("Cat", 400, 100)
    rect(290, 74, 270, 320)
}
