let items = [...document.querySelectorAll('.number')];

let updateCount = (el) => {
 let value = parseInt(el.dataset.value);
 let increment = Math.ceil(value / 1000);
 // console.log(increment);
 let initialValue = 0;
 let increaseCount = setInterval(() => {
     initialValue += increment;
     console.log(initialValue);
     
     if (initialValue > value) {
         el.textContent = `${value}+`;
         clearInterval(increaseCount);
         return;
     }
     el.textContent = `${initialValue}+`;
 }, 1);
};

items.forEach((item) => {
 updateCount(item);
});

