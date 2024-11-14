let btn = document.querySelector('.btn');
let bulb = document.querySelector('.lightbulb')
btn.addEventListener('click', function(){
    btn.classList.toggle('hidden_btn');
    bulb.classList.toggle('hidden_bulb');   
});