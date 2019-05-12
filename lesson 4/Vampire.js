class Vampire extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;

    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }

    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            var newCell1 = random(this.chooseCell(1));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();

                }

            }



            this.acted = true;
        }



    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(3));
            console.log(newCell)
            var newCell1 = random(this.chooseCell(2));
            console.log(newCell1)
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 11) {
                    this.mul();
                    this.energy = 8;
                }
                this.acted = true;

            }
            else if (newCell1) {
                var X = newCell1[0];
                var Y = newCell1[1];
                matrix[Y][X] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 11) {
                    this.mul();
                    this.energy = 7;
                }
                this.acted = true;


            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Vampire(newX, newY, 4)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}

