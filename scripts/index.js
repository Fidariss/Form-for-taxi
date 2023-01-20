import { myMapFunc } from './mapFunc.js'
import { init } from './initialMap.js'

ymaps.ready(myMapFunc);
ymaps.ready(init);

const input = document.getElementById('suggest1')
input.addEventListener("change", () => {
    const value = input.value
    myMapFunc(value, 'Брест')
}) 