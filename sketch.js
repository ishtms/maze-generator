var cells = [];
var w = 60;
var cols = 10
var current;
function setup() {
    createCanvas(800, 800);
    for(var yAxis = 0; yAxis < cols; yAxis++) {
        for(var xAxis = 0; xAxis < cols; xAxis++) {
            cells.push(new Cell(xAxis, yAxis, w));
        }
    }
    current = cells[0];
}

function draw() {
    frameRate(3)
    //background(230)
    for(var index = 0; index < cells.length; index++) {
        cells[index].draw();
    }

    current.isVisited = true;
    console.log("NEIGHBOR " + current.checkNeighbors())
    var next = current.checkNeighbors();

    if(next) {
        next.isVisited = true;
        current = next
        console.log(next)
    }
}