// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(arr){
    let driversList = arr.slice()
    return driversList[0], driversList[1];
}

function returnLastTwoDrivers(arr2){
    //let driversList2 = arr2.slice()
    const driversList2 = [...arr2]
    return driversList2[driversList2.length - 2], driversList2[driversList2.length - 1]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(){
        let fare = 12
        return num * fare
    } 
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArray, returnDriver){
    if(returnDriver === 'returnFirstTwoDrivers')
    {
        returnFirstTwoDrivers(driverArray)
    }
    else if(returnDriver === 'returnLastTwoDrivers')
    {
        returnLastTwoDrivers(driverArray)
    }
    return driverArray
}


