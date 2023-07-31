let userHeight = document.querySelector('.userHeight');
let userWeight = document.querySelector('.userWeight');
let result = document.querySelector('.result')
const answer_btn = document.querySelector('#answer_btn')
let normal_w = 0;
answer_btn.addEventListener('click',function(){
    normal_w = (userHeight.value-100)*0.9;
    result.innerHTML = `적정 체중은 ${normal_w}kg 이며, ${userWeight.value - normal_w}kg 초과되셨습니다.`
})
console.log(normal_w)