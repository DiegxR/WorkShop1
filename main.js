const rated = document.getElementById('rated');
const boton = document.getElementById('btnSubmit');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const qualification = document.getElementById('qualification');

let number;
let captura = JSON.parse(localStorage.getItem('captura')) || [];
rated.addEventListener('click', e=>{ 
    number = e.path[0].id;
    console.log(number);
})

boton.addEventListener('click', ()=>{
    if(number === undefined){
        alert("Please select one of the options")
    }else{
        captura.push(number);
        localStorage.setItem('captura', JSON.stringify(captura));

        section1.classList.add('hidden');
        section2.classList.remove('hidden')
        console.log(qualification)
        qualification.innerText = `You selected ${number} out of 5`
    }
})
