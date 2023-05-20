const btn = document.querySelector(".btn");
const textarea = document.querySelector(".textArea");

const url = "https://api.adviceslip.com/advice"

btn.addEventListener("click", adviceGenarator);

function adviceGenarator() {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            textarea.innerText = json.slip.advice;
        })
        .catch(() => alert("Site is busy"))

}