export const createCostElement = (cost, distance) => {
    const costWrapper = document.querySelector('#cost')
    costWrapper.innerHTML = ''

    const spanAmount = document.createElement('span')
    spanAmount.classList.add("wrapper-cost__cost")
    spanAmount.innerText = `Стоимость вашей поездки будет составлять: ${cost} р`

    const spanDistance = document.createElement('span')
    spanDistance.classList.add("wrapper-cost__distance")
    spanDistance.innerText = `Расстояние: ${distance}`

    const err = document.createElement('span')
    err.classList.add("wrapper-cost__err")
    err.innerText = `Введен неверный адрес!`


    console.log(cost && distance);
    console.log(cost, distance);

    const costBtnAmount = document.getElementById('btn-cost-amount')
    const btnSpinner = document.querySelector('#btn-spinner')
    costBtnAmount.disabled = false;
    btnSpinner.classList.remove('active-spinner')

    if (cost && distance) {
        costWrapper.append(spanAmount)
        costWrapper.append(spanDistance)
        const dataSession = sessionStorage.getItem('form-data')
        if (dataSession) {
            const newData = JSON.parse(dataSession);
            newData.cost = cost;
            newData.distance = distance;
            sessionStorage.setItem('form-data', JSON.stringify(newData))
        }
    }
    else {
        costWrapper.append(err)
    }

}