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

//
const createFareMultiplier = function (integer) {
    return function (fare) {
      return fare * integer;
    };
  };

 

//double fare
const fareDoubler = createFareMultiplier(2);

//trippler fare 
const fareTripler = createFareMultiplier(3);
// select fiffrent drivers
const selectDifferentDrivers = function(drivers, returnDriversFunction) {
  return returnDriversFunction(drivers);
};