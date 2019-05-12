
class Werewolf extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 9;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2]
        ];
    }
    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }

    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            var newCell1 = random(this.chooseCell(1))
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
        }
    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(4));
            console.log(newCell)
            var newCell2 = random(this.chooseCell(3));
            console.log(newCell2)
            var newCell3 = random(this.chooseCell(2));
            console.log(newCell3)
            if (newCell) {
                console.log(newCell)
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 9;
                }
                this.acted = true;

            }

            else if (newCell2) {
                var X = newCell2[0];
                var Y = newCell2[1];
                matrix[Y][X] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = X;
                this.y = Y;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 9;
                }
                this.acted = true;

            }
            else if (newCell3) {
                var Z = newCell3[0];
                var Q = newCell3[1];
                matrix[Q][Z] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = Z;
                this.y = Q;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 9;
                }
                this.acted = true;

            }
        }
        else {
            this.move();
        }

    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Werewolf(newX, newY, 5)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
}

