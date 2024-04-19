const inputText = document.getElementById("input");
const h3 = document.getElementsByClassName("h3")[0];

function val() {
    const value = inputText.value;
    const reversedValue = value.split("").reverse().join("");

    if (!value) {
        alert("Please type something");
    } else {
        if (reversedValue === value) {
            h3.textContent = "This is a Palindrome";
        } else {
            h3.textContent = "This is Not a Palindrome";
        }
        inputText.value = "";
    }
}
