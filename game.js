let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum ==3 ) {
            p1sum = 20
        }
        if (p1sum == 6) {
            p1sum = 14
        }
        if (p1sum == 11) {
            p1sum = 28
        }
        if (p1sum == 15) {
            p1sum = 34
        }
        if (p1sum == 17) {
            p1sum = 74
        }
        if (p1sum == 22) {
            p1sum = 37
        }
        if (p1sum == 38) {
            p1sum = 59
        }
        if (p1sum == 49) {
            p1sum = 67
        }
        if (p1sum == 57) {
            p1sum = 76
        }
        if (p1sum == 61) {
            p1sum = 78
        }
        if (p1sum == 73) {
            p1sum = 86
        }
        if (p1sum == 81) {
            p1sum = 98
        }
        if (p1sum == 88) {
            p1sum = 91
        }
      

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        
        if (p2sum ==3 ) {
            p2sum = 20
        }
        if (p2sum == 6) {
            p2sum = 14
        }
        if (p2sum == 11) {
            p2sum = 28
        }
        if (p2sum == 15) {
            p2sum = 34
        }
        if (p2sum == 17) {
            p2sum = 74
        }
        if (p1sum == 22) {
            p1sum = 37
        }
        if (p2sum == 38) {
            p2sum = 59
        }
        if (p2sum == 49) {
            p2sum = 67
        }
        if (p2sum == 57) {
            p2sum = 76
        }
        if (p2sum == 61) {
            p2sum = 78
        }
        if (p2sum == 73) {
            p2sum = 86
        }
        if (p2sum == 81) {
            p2sum = 98
        }
        if (p2sum == 88) {
            p2sum = 91
        }
        
        sum = p2sum
        }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




}
)
function openPopup() {
    document.getElementById("cloudPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("cloudPopup").style.display = "none";
}
if (document.getElementById("dicebtn").innerText = "Red's Turn"){
    document.getElementById("dicebtn").style.backgroundColor = "red"
}  let playerScore = 0;
let computerScore = 0;

// Function to update player score
function updatePlayerScore(score) {
    playerScore += score;
    document.getElementById('playerScore').textContent = "Player: " + playerScore;
}

// Function to update computer score
function updateComputerScore(score) {
    computerScore += score;
    document.getElementById('computerScore').textContent = "Computer: " + computerScore;
}

// Example usage:
updatePlayerScore(10); // Increment player score by 10
updateComputerScore(5);