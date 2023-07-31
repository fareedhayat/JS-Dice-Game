function diceFace1() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    return num1;
}

function check1() {
    var num = diceFace1();
    if (num === 1) {
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
    }
    if (num === 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
    }
    if (num === 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
    }
    if (num === 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
    }
    if (num === 5) {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
    }
    if (num === 6) {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
    }
    return num;
}

function diceFace2() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    return num1;
}

function check2() {
    var num = diceFace2();
    if (num === 1) {
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
    }
    if (num === 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
    }
    if (num === 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
    }
    if (num === 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
    }
    if (num === 5) {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
    }
    if (num === 6) {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
    }
    return num;
}

function winner() {
    var num1 = check1();
    var num2 = check2();

    if (num1 > num2) {
        document.querySelector("h1").innerHTML = "Player 1 WON!"
    } else if (num1 === num2) {
        document.querySelector("h1").innerHTML = "TIE!"
    } else {
        document.querySelector("h1").innerHTML = "Player 2 WON!"
    }
}

winner();

