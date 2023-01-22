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










