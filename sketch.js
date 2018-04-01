var cells = [];
var w = 60;

function setup() {
    createCanvas(601, 601);
    for(var yAxis = 0; yAxis < 10; yAxis++) {
        for(var xAxis = 0; xAxis < 10; xAxis++) {
            cells.push(new Cell(xAxis * 60, yAxis * 60, w));
        }
    }
}

function draw() {
    //background(230)
    for(var index = 0; index < cells.length; index++) {
        cells[index].draw();
    }
}