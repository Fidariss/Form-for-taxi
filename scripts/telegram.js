export const fetchRequest = async (URL, ID, depart, arrive, date, classCar, phone, cost, distance, comments) => {
    const message = `<b>Откуда</b>: ${depart} 
    ${'\n'}<b>Куда</b >: ${arrive} 
    ${'\n'}<b>Дата</b >: ${date} 
    ${'\n'}<b>Класс</b >: ${classCar} 
    ${'\n'}<b>Расстояние</b >: ${distance} 
    ${'\n'}<b>Стоимость</b >: ${cost} р 
    ${'\n'}<b>Телефон</b >: ${phone} 
    ${'\n'}<b>Комментарий</b >: ${comments}`
    try {
        fetch(URL, {
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
    } catch {
        console.error(`Ошибка POST запроса`);
    }

}


export const listenerSentMessageTelegram = () => {

    const buttonSend = document.getElementById('sent-order')
    buttonSend.addEventListener('click', function (e) {
        e.preventDefault();
        // console.table([this.inputName.value, this.inputMail.value]);
        const { departSity, arriveSity, carClass, date, phone, cost, distance } = JSON.parse(sessionStorage.getItem('form-data'))
        const comments = document.querySelector('#comments').value

        fetchRequest(URL_API, CHAT_ID, departSity, arriveSity, date, carClass, phone, cost, distance, comments)
    })
}










