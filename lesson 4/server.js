

/*
var matrix = []
var n = 15
var m = 15



var side = 40;

function setup() {
    frameRate(5);
    createCanvas(m * side, n * side);
    for (var y = 0; y < m; y++) {
        matrix[y] = []
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 1, 0, 1, 1, 1, 0, 2, 4, 3, 0, 3, 0, 0, 1, 3, 1, 0, 1, 2, 0, 1, 2, 5, 0, 1, 0, 0, 1, 1, 4, 0, 0, 4, 0, 0, 0, 2, 0, 0, 2, 0, 0,])
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Gishatic(x, y, 3)
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Vampire(x, y, 4)
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Werewolf(x, y, 5)
            }

        }
    }
    console.log(matrix);
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat()
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat()
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].eat();

            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].eat()

            }
        }
    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }

            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }
}
*/
//1//
/*
var clickCount = 0;
function clickHandler(evt){
   clickCount++;
   console.log(evt);
   var str = "Thanks for clicking " + clickCount;
   this.innerText = str;
}

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);
*/
//2//
/*
function bodyClick(evt) {
    console.log(evt.pageX, evt.pageY);
 }
 window.onclick = bodyClick;
 */
//3//
/*
function windowLoad() {
    console.log("Window is loaded");
 }
 window.onload = windowLoad;
 */
 //4//
 /*
function click(evt) {
    console.log(evt.pageX, evt.pageY);
 }
 window.onclick = click;
 */
function keydown(evt) {
    console.log("You printed " + evt.key);
 }
 window.onkeydown = keydown;
 