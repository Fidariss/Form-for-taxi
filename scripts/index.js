import { myMapFunc } from './mapFunc.js'
import { init } from './initialMap.js'
import { validate } from './validate.js';
import { CHAT_ID, URL_API } from './constants.js'
import { fetchRequest, listenerSentMessageTelegram } from './telegram.js';

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

// ======================== Listener for send message ===============

window.addEventListener('load', () => { validate(); sessionStorage.removeItem('form-data') }, false);
const inputPhone = document.querySelector('#phone-form')
console.log(inputPhone);
inputPhone.addEventListener('input', (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length > 4 && sessionStorage.getItem('form-data')) {
        document.querySelector('#sent-order').disabled = false;
    } else {
        document.querySelector('#sent-order').disabled = true;
    }
})




listenerSentMessageTelegram()