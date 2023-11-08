function awnser () {
    var score = 0;
    for (let i = 1; i <= 10; i++) {
        if (document.getElementById(`correct${i}`).checked) {
        score ++;
        } else {
            alert("Please awnser all the question to the best of your ability")
            break;
        }
    }
    
    var display = document.getElementById("check").innerHTML += `You got ${score} / 10 correct`;
}

function reload () {
    location.reload()
}
