let navbar = document.querySelector('.header .navbar');
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
};

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}
