
function carClass(carName){
    this.carName = carName || 'unknownName';
}

carClass.prototype.logName = function(){
    console.log("Car name is " + this.carName);
}

module.exports = {
    carClass: carClass
}
