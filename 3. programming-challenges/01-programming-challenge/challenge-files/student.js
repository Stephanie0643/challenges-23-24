function myFirstFunction(bike) {
    forward(bike);
}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward4(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward5(bike) {
    let i = 5;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward10(bike) {
    let i = 10;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}

function ellShape(bike) {
    forward5(bike);
    turnRight(bike);
    forward4(bike);
}

function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}

function forwardN(bike, steps) {
    let i = steps;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function crookedUTurn(bike) {
    forwardN(bike, 7);
    turnRight(bike);
    forwardN(bike, 9);
    turnRight(bike);
    forwardN(bike, 3);
}

function forwardUntilWall(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
}

function smartEllShape(bike) {
    while (!sensor(bike)) {
        forward(bike);
    }
    turnRight(bike);
    while (!sensor(bike)) {
        forward(bike);
    }
}

function spiral(car) {
    while (!sensor(car)) {
        forwardUntilWall(car);
        turnRight(car);
    }
}

function left(car) {
    while (sensor(car)) {
        turnRight(car);
    }
    forward(car);
}

function slalom(car) {
    forwardUntilWall(car);
    let a = 3

    while (a > 0) {
        turnRight(car);
        a = a - 1;
    }
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    let b = 3

    while (b > 0) {
        turnRight(car);
        b = b - 1;
    }
    forwardUntilWall(car);
    let c = 3

    while (c > 0) {
        turnRight(car);
        c = c - 1;
    }
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
