const TextData = [
 { id: 1, Text: '1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 2, Text: '2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 3, Text: '3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 4, Text: '4) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 5, Text: '5) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 6, Text: '6) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 7, Text: '7) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 8, Text: '8) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 9, Text: '9) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 10, Text: '10) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 11, Text: '11) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 12, Text: '12) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 13, Text: '13) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 14, Text: '14) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 15, Text: '15) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 16, Text: '16) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 17, Text: '17) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 18, Text: '18) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 19, Text: '19) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
 { id: 20, Text: '20) Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nam, praesentium accusamus eligendi ducimus perspiciatis harum dolores velit neque sit inventore illum doloribus quaerat, deserunt corporis. Quis a saepe tempora.' },
];

let generate = document.querySelector('.generate');
let loremForm = document.querySelector('.lorem-form');
let loremText = document.querySelector('.lorem-text');
let numberInput = document.querySelector('#numberInput');

loremForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const value = parseInt(numberInput.value);
 const random = Math.floor(Math.random() * TextData.length);

 if (isNaN(value) || value < 1 || value > 20) {
   loremText.innerHTML = `<p class='result'>${TextData[random].Text}</p>`;
 } else {
   let tempText = TextData.slice(0, value);
   let temp = tempText.map((item) => {
     return `<p class='result'>${item.Text}</p>`;
   }).join('');
   loremText.innerHTML = temp;
 }
});
