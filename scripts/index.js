import { myMapFunc } from './mapFunc.js'
import { init } from './initialMap.js'
import { validate } from './validate.js';
import { CHAT_ID, URL_API } from './constants.js'
import { fetchRequest } from './telegram.js';

ymaps.ready(myMapFunc);
ymaps.ready(init);

const form = document.getElementById('form-for-calculation')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const departInput = document.querySelector('#departure-city');
    const arrivalInput = document.querySelector('#arrival-city');
    departInput.setCustomValidity('')
    arrivalInput.setCustomValidity('')

    if (form.checkValidity()) {
        sessionStorage.removeItem('form-data')
        const departSity = document.getElementById('departure-city').value
        const arriveSity = document.getElementById('arrival-city').value
        const date = document.getElementById('date-form').value


        const carSelectElement = document.getElementById('select-class')
        const indexOptionElement = carSelectElement.options.selectedIndex
        const element = carSelectElement[indexOptionElement]
        const carClass = element.getAttribute('type')

        const phone = document.getElementById('phone-form').value

        const formData = {
            departSity: departSity,
            arriveSity: arriveSity,
            date: date,
            carClass: carClass,
            phone: phone
        }
        console.log(formData);

        sessionStorage.setItem('form-data', JSON.stringify(formData))

        myMapFunc(departSity, arriveSity)


        

    }



})

// const dataText = document.querySelector('#date-text')
// dataText.textContent = new Date().toLocaleDateString()

// document.querySelector('#date-form').addEventListener('change', (event)=> {
//     const value = event.target.value.split('-');
//     dataText.textContent = `${value[2]}/${value[1]}/${value[0]}`;
// })
  
window.addEventListener('load', validate, false);



// =========== Telegramm


const buttonSend = document.getElementById('sent-order')
buttonSend.addEventListener('click', function (e) {
    e.preventDefault();
    // console.table([this.inputName.value, this.inputMail.value]);
    const { departSity, arriveSity, carClass, date, phone, cost, distance } = JSON.parse(sessionStorage.getItem('form-data'))
    const comments = document.querySelector('#comments').value

    fetchRequest(URL_API, CHAT_ID, departSity, arriveSity, date, carClass, phone, cost, distance, comments)
})