function exchange(){
    let money = +document.getElementById("amount").value;
    let come = +document.getElementById('from').value;
    let go = +document.getElementById('to').value;
    let final = (money * go) / come;
    document.getElementById("result").innerHTML = "Result: " + final;
}