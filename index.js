function manage() {
    var groceryArr = [];
    while (true) {
        var input = prompt("What item would you like to add? one item at a time.");
        if ((input === "quit") || (input == undefined) || (input == null)) {
            break;
        } else if (input === "clear") {
            groceryArr = ['']
        } else {
            groceryArr.push(input);
        }
    }
    var contentElement = document.getElementById("content");
    for (let i = 0; i < groceryArr.length; i++) {
        var item = document.createElement("div");
        item.textContent = groceryArr[i];
        item.addEventListener("click", function () {
            toggleStrikeThrough(this);
        });
        contentElement.appendChild(item);
    }
}

function toggleStrikeThrough(element) {
    if (element.style.textDecorationLine === "line-through") {
        element.style.textDecorationLine = "none";
        element.style.color = "black"
    } else {
        element.style.textDecorationLine = "line-through";
        element.style.color = "red"
    }
}



