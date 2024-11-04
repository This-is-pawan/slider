let pra = document.querySelector("p");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  Data();
});
const url = "https://icanhazdadjoke.com/";

const Data = async () => {
  const response = await fetch(url, {
    headers: { Accept: "application/json" }
  });
  
  const data = await response.json();
  
  
  pra.innerText = data.joke;
};



