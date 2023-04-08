// const num=document.querySelector("p");
// num.addEventListener('click',updateTest);
// function updateTest(){
//     const name=prompt("Enter the boc")
//     name.textConent=`PLayer ${name}`;
// }

const para = document.querySelector('p.example');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Hello : ${name}`;
}
