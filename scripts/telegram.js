import { CHAT_ID, URL_API } from './constants.js'

export const fetchRequest = async (URL, ID, depart, arrive, date, time, classCar, phone, cost, distance, comments) => {
    const message = `<b>Откуда</b>: ${depart} 
    ${'\n'}<b>Куда</b >: ${arrive} 
    ${'\n'}<b>Дата</b >: ${date} 
    ${'\n'}<b>Время</b >: ${time} 
    ${'\n'}<b>Класс</b >: ${classCar} 
    ${'\n'}<b>Расстояние</b >: ${distance} 
    ${'\n'}<b>Стоимость</b >: ${cost}р 
    ${'\n'}<b>Телефон</b >: ${phone} 
    ${'\n'}<b>Комментарий</b >: ${comments}`
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: ID,
                parse_mode: 'html',
                text: message
            })
        })
        if (!response.ok) {
            console.error(`Ошибка POST запроса`);
            const message = document.getElementById('message-about-send')
            message.classList.add('err')
            message.innerText = "Заявка не отправлена, попробуйте еще раз!"
        } else {
            const message = document.getElementById('message-about-send')
            message.classList.add('successfully')
            message.innerText = "Ваша заявка отправлена!"
        }
    } catch (err) {
        console.error(`Ошибка POST запроса`);
        const message = document.getElementById('message-about-send')
        message.classList.add('err')
        message.innerText = "Заявка не отправлена, попробуйте еще раз!"
    }

}


export const listenerSentMessageTelegram = () => {

    const buttonSend = document.getElementById('sent-order')
    buttonSend.addEventListener('click', function (e) {
        e.preventDefault();
        const { departSity, arriveSity, carClass, cost, distance } = JSON.parse(sessionStorage.getItem('form-data'))
        const date = document.getElementById('date-form').value
        const time = document.querySelector('#time-form').value
        const phone = document.getElementById('phone-form').value
        const comments = document.querySelector('#comments').value

        fetchRequest(URL_API, CHAT_ID, departSity, arriveSity, date, time, carClass, phone, cost, distance, comments)
   
    })
}










