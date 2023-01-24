const costs = {
    standard: 22,
    comfort: 30,
    business: 40,
    bus: 40
}

export const calculateCost = (distance, carClass) => {
    if (distance.includes('км')) {
        console.log(distance, carClass);
        const number = distance.slice(0, -3).split(',').join('.').split('').filter((item) => item.trim() !== '').join('');
        const result = (costs[`${carClass}`] * Number(number).toFixed(0));
        return result;
    } return costs[`${carClass}`];
}

