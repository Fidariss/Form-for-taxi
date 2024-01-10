// Стоимость перевозки
// const costs = {
//     standard: [25,22,20],
//     comfort: 30,
//     business: 40,
//     bus: 40
// }

export const calculateCost = (distance, carClass) => {

    if (distance.includes('км')) {
        
        const number = distance.slice(0, -3).split(',').join('.').split('').filter((item) => item.trim() !== '').join('');
        let result;
        if (carClass === 'standard') {
            const cost = Number(number) <= 200 ? costs.standard[0] : Number(number) <= 1000 ? costs.standard[1] : costs.standard[2]
            result = (cost * Number(number).toFixed(0));   
        }
        else {

            result = (costs[`${carClass}`] * Number(number).toFixed(0));   
        }

        return result;
    }
    
    return costs[`${carClass}`];
}
