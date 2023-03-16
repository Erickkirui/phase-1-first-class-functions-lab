// Code your solution in this file!
//return first two drivers
const returnFirstTwoDrivers = function (drivers){ 
    return drivers.slice(0, 2);
    
}

const drivers = ['erick' , 'koech' , 'kirui']

const firstTwodrivers = returnFirstTwoDrivers(drivers)
console.log (firstTwodrivers)

// return last two drivers

const returnLastTwoDrivers = function (lastDrivers){
 return lastDrivers.slice(-2);

}
const lastDrivers = ["erick" , "kirui","koech"]
const lastTwoDrivers = returnLastTwoDrivers(lastDrivers);
console.log(lastDrivers)

// function containing the above two functions

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];