// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(obj,key,value) {
    const driverCopy = Object.assign({}, obj);
    driverCopy[key]=value;
    return driverCopy;

}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value) {
    obj[key]=value;
    return obj;
}

function deleteFromDriverByKey(obj,key) {
    const copyDriver = Object.assign({},obj);
    delete copyDriver[key];
    return copyDriver;
}

function destructivelyDeleteFromDriverByKey(obj,key) {
    delete obj[key];
    return obj;
}