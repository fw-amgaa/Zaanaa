


var menu = document.querySelector("#mobile-toggle");
var remove = document.querySelector('#mobile-remove');
var nav = document.querySelector('#mobile-nav');

menu.addEventListener('click', function(){
    nav.classList.add('active');
});

remove.addEventListener('click', function(){
    nav.classList.remove('active');
});

 




