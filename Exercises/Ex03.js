///Speed Limit = 70;
//If speed limit is less than or equal to 70 then print OK
//For every 5 above 70 speed limit, we give 1 point;
//If more that 12 points --> License suspended

checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    if (speed < speedLimit + kmPerPoint) {
        console.log('OK');
        return; //this will go out of the function and avoid the else part of the function;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License Suspended');
    else console.log(points, ' Points');
}