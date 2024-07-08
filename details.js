// Author: Your Name
// Date: YYYY-MM-DD
// Description: EvaluateSysInfo function to check system compatibility based on RAM and CPU.

function EvaluateSysInfo() {
    const ram = document.getElementById("ram").value;
    const cpu = document.getElementById("cpu").value;
    const button = document.querySelector("button");

    if (ram >= 8 && cpu >= 4) {
        button.style.backgroundColor = "green";
        button.innerText = "Sufficient Resources";
    } else {
        button.style.backgroundColor = "red";
        button.innerText = "Insufficient Resources";
    }
}
