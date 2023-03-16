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

//trippler fare 
const createFareMultiplier = function (integer) {
    return function (fare) {
      return fare * integer;
    };
  };

  const trippleFare = createFareMultiplier(3);
  const fare = 20;
  const trippledFare = trippleFare(fare);
  console.log(trippledFare);


//double fare

const fareDoubler = function (int) {
    return function (fare2) {
      return fare2 * int;
    };
  };

  const doubleFare = fareDoubler(2);
  const fare2 = 20;
  const doubledFare = doubleFare(fare);
  console.log(doubledFare);