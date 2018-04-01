var Cell = function(_x, _y, _width) {
    this.x = _x;
    this.y = _y;
    this.walls = [true, true, true, true];
    this.draw = function() {
         // Draw four lines joining each points of this cell
        if(this.walls[0]) {
            line(this.x, this.y, this.x + _width, this.y);
        }
        if(this.walls[1]) {
            line(this.x + _width, this.y, this.x + _width, this.y + _width)
        }
        if(this.walls[2]) {
            line(this.x + _width, this.y + _width, this.x, this.y + _width);
        }
        if(this.walls[3]) {
            line(this.x, this.y + _width, this.x, this.y)
        }
    }
}