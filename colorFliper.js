let differentColorData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let alignSpan = document.querySelector('.align span');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * differentColorData.length);
        hex += differentColorData[random];
    }
    alignSpan.textContent = hex;
    document.body.style.background = hex;
});








