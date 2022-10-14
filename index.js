
function distanceFromHqInBlocks(blockNum) {
    return Math.abs(42-blockNum);
}

function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264;
}

function distanceTravelledInFeet(start,end) {
    return Math.abs(end-start) * 264;
}

function calculatesFarePrice(start,end) {
    let dist = distanceTravelledInFeet(start,end);
    switch (true) {
        case dist < 400:
            return 0;
        case dist < 2000:
            return (0.02 * (dist - 400));
        case dist < 2500:
            return 25;
        default:
            return 'cannot travel that far';
    }
}