// Code your solution here


const findMatching= (driverNames,matchString) =>{
   
    return driverNames.filter((element) => element.toLowerCase() === matchString.toLowerCase());

}

const fuzzyMatch = (drivers,matchCharachters) => {
    return drivers.filter((element) => {
        let charLength=matchCharachters.length;
        return element.slice(0,charLength)===matchCharachters
        })
}



const matchName = (drivers,matchName) => {
    return drivers.filter((element) => element.name===matchName)

}
