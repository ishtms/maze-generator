function getIndex(x, y) {
    if(x < 0 || y < 0 || y > cols - 1 || x > cols - 1) {
        return -1;
    }
    return x + y * cols;
}

var Cell = function(_x, _y, _width) {
    this.x = _x;
    this.y = _y;
    this.isVisited = false;
    this.walls = [true, true, true, true];

    this.checkNeighbors = function() {
        var neighbors = [];
        var topNeighbor    = cells[getIndex(this.x, this.y - 1)];
        var rightNeighbor  = cells[getIndex(this.x + 1, this.y)];
        var bottomNeighbor = cells[getIndex(this.x, this.y + 1)];
        var leftNeighbor   = cells[getIndex(this.x - 1, this.y)];
        console.log(" top " + getIndex(this.x, this.y - 1) + " right " + this.x + 1, this.y + " bottom " + this.x, this.y + 1 + " left " + leftNeighbor)
        if(topNeighbor && !topNeighbor.isVisited) {
            neighbors.push(topNeighbor)
        }
        if(rightNeighbor && !rightNeighbor.isVisited) {
            neighbors.push(rightNeighbor)
        }
        if(bottomNeighbor && !bottomNeighbor.isVisited) {
            neighbors.push(bottomNeighbor)
        }
        if(leftNeighbor && !leftNeighbor.isVisited) {
            neighbors.push(leftNeighbor)
        }
        if(neighbors.length > 0) {
            var randomNumber = floor(random(0, neighbors.length));
            return neighbors[randomNumber]
        } else {
            return undefined;
        };

    }

    this.draw = function() {
         // Draw four lines joining each points of this cell
         var x = this.x * w;
         var y = this.y * w;
        if(this.walls[0]) {
            line(x, y, x + _width, y);
        }
        if(this.walls[1]) {
            line(x + _width, y, x + _width, y + _width)
        }
        if(this.walls[2]) {
            line(x + _width, y + _width, x, y + _width);
        }
        if(this.walls[3]) {
            line(x, y + _width, x, y)
        }

        if(this.isVisited) {
            fill(200, 23, 75);
            rect(x, y, _width, _width)
        }
    }
}