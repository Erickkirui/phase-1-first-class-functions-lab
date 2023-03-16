// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){ 
    return drivers.slice(0, 2);
    
}

const drivers = ['erick' , 'koech' , 'kirui']

const firstTwodrivers = returnFirstTwoDrivers(drivers)
console.log (firstTwodrivers)

const returnLastTwoDrivers = function (lastDrivers){
 return lastDrivers.slice(-2);

}
const lastDrivers = ["erick" , "kirui","koech"]
const lastTwoDrivers = returnLastTwoDrivers();
console.log(lastDrivers)