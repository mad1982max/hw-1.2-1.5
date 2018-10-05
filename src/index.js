'use strict';

const cars = require('./data/cars'); // IMMUTABLE. DON'T CHANGE cars
const customers = require('./data/customers'); // IMMUTABLE. DON'T CHANGE customers
const dealerships = require('./data/dealerships'); // IMMUTABLE. DON'T CHANGE dealerships
const orders = require('./data/orders'); // IMMUTABLE. DON'T CHANGE orders

//SUBTASK #2***************************************

const subtask2 = () => {
    const customerMap = new Map();
    const carsMap = new Map();

    customers.forEach(customer => customerMap.set(customer.id, customer));
    cars.forEach(car => carsMap.set(car.id, car));

    return dealerships.map(dealer => {
        return {
            dealershipId: dealer.dealershipId,
            name: dealer.name,
            state: dealer.state,
            sellingArea: dealer.sellingArea.map(state => {
                return {
                    state: state,
                    customerIds: orders
                        .filter(order => {
                            const customer = customerMap.get(order.customerId);
                            const car = carsMap.get(order.inventoryId);
                            if(!car || !customer) return false;
                            const isCustomerInState = customer.address.state === state;
                            const isCarInDealer = car.dealershipId === +dealer.dealershipId;
                            return isCustomerInState && isCarInDealer;

                        }).map(item => item.customerId)

                }
            })
        }
    });

};

console.time('subtask #2');
const result2 = subtask2();
console.timeEnd('subtask #2');
console.log('subtask #2 result: ', JSON.stringify(result2[0], null, 2), JSON.stringify(result2[result2.length - 1], null, 2));

//SUBTASK #3***************************************
const subtask3 = () => {
    function handleSortAcs(a, b){
        if(a.make < b.make) return -1;
        if(a.make > b.make) return 1;
        if(a.model < b.model) return -1;
        if(a.model > b.model) return 1;
        if(a.displayName < b.displayName) return -1;
        if(a.displayName > b.displayName) return 1;
    }

    return dealerships.map(dealer => {
        return {
            dealershipId: dealer.dealershipId,
            name: dealer.name,
            state: dealer.state,
            carIds: cars
                .filter(car => dealer.dealershipId === car.dealershipId)
                .sort(handleSortAcs)
                .map(car => car.id)
        }
    });
};

console.time('subtask #3');
const result3 = subtask3();
console.timeEnd('subtask #3');
console.log('subtask #3 result: ', JSON.stringify(result3[0], null, 2), JSON.stringify(result3[result3.length - 1], null, 2));

//SUBTASK #4--------------------------------
const subtask4 = (list) => {
    function handleSort2Desc(a, b){
        if(a.state > b.state) return -1;
        if(a.state < b.state) return 1;
        if(a.carIds.length > b.carIds) return -1;
        if(a.carIds.length < b.carIds.length) return 1;
    }
    return list.sort(handleSort2Desc);
};

console.time('subtask #4');
const result4 = subtask4(result3);
console.timeEnd('subtask #4');
console.log('subtask #4 result: ', JSON.stringify(result4[0], null, 2), JSON.stringify(result4[result4.length - 1], null, 2));


//SUBTASK #5--------------------------------


const subtask5 = (minId = 100000, maxId = 100200, isReversed = false) => {

    let dealerArr = dealerships.map(dealer => {
        return {
            dealershipId: dealer.dealershipId,
            name: dealer.name,
            state: dealer.state,
            carIds: cars
                .filter(car => dealer.dealershipId === car.dealershipId)
                .map(car => car.id)
        }
    });

    if(isReversed) {
        return dealerArr.filter(dealer => dealer.dealershipId < minId || dealer.dealershipId > maxId);
    } else {
        return dealerArr.filter(dealer => dealer.dealershipId > minId && dealer.dealershipId < maxId);
    }
};


console.time('subtask #5');
const result5 = subtask5();
console.timeEnd('subtask #5');
console.log('subtask #5 result: ', JSON.stringify(result5[0], null, 2), JSON.stringify(result5[result5.length - 1], null, 2));

//SUBTASK #6----------------------------------

const subtask6 = (list, minCarsCount = 100) => {
    const dealerList = list.map(dealer => {
        return {
            dealershipId: dealer.dealershipId,
            name: dealer.name,
            state: dealer.state,
            cars: cars
                .filter(car => dealer.dealershipId === car.dealershipId)
                .map(car => car.id)
                .reduce((sum, car) => {
                    return sum + 1;
                }, 0)
        }
    });

    return dealerList.filter(dealer => dealer.cars > minCarsCount);
};

console.time('subtask #6');
const result6 = subtask6(result3);
console.timeEnd('subtask #6');
console.log('subtask #6 result: ', JSON.stringify(result6[0], null, 2), JSON.stringify(result6[result6.length - 1], null, 2));


module.exports = {
    subtask2,
    subtask3,
    subtask4,
    subtask5,
    subtask6
};
