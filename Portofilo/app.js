const btnEl = document.querySelector('.btn');
const popEl = document.querySelector('.popup-container');
const containerEl = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');


btnEl.addEventListener('click', ()=>{
    containerEl.classList.add("active");
    popEl.classList.remove("invisible")
})

closeBtn.addEventListener('click', ()=>{
    containerEl.classList.remove("active");
    popEl.classList.add("invisible");
})
