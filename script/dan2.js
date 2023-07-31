let dan2 = 2;
let dan_num = 1;
const calc = document.querySelector('#calc');
const answer_btn = document.querySelector('#answer_btn')
const result = document.querySelector('#result')
let p = document.querySelectorAll('.dan2 p')
p[0].innerHTML += dan2*dan_num
p[1].innerHTML += dan2*++dan_num;
p[2].innerHTML += dan2*++dan_num;
p[3].innerHTML += dan2*++dan_num;
p[4].innerHTML += dan2*++dan_num;
p[5].innerHTML += dan2*++dan_num;
p[6].innerHTML += dan2*++dan_num;
p[7].innerHTML += dan2*++dan_num;
p[8].innerHTML += dan2*++dan_num;
answer_btn.addEventListener('click',function(){
    let calc_txt = Number(calc.value)
    result.value = dan2*calc_txt
})