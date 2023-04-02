const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close__btn');
const openBtn = document.querySelector('.toggle');

openBtn.addEventListener('click', ()=>{
    sideBar.classList.toggle('show__sidebar');
});

closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('show__sidebar');
})