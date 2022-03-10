function insert(num) {
    var number = document.getElementById('result').value;
    document.getElementById('result').value = number + num;
}

function clean() {
    document.getElementById('result').value = "";
}

function back() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
}

function calculator() {
    var result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value = eval(result);
    } else {
        document.getElementById('result').value = "Error";
    }
}