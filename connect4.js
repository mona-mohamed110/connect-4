c1 = 1
c2 = 1
c3 = 1
c4 = 1
c5 = 1
c6 = 1
c7 = 1
turn = 1


//checking the winner

function check(player) {
    setTimeout(() => {

        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }

            }
        }

        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` && document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }

            }

        }

        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }

            }
        }

        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` && document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }

            }
        }

    }, 200)

}



//playing
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {

        sum = eval(`${e.id}`)
        eval(`${e.id}++`)


        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red"
            turn++
            check('red')
            document.getElementById("whosturn").innerText = "Yellow's Turn"
        }
        
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow"
            turn++
            check('yellow')
            document.getElementById("whosturn").innerText = "Red's Turn"

        }
    




    })
})

