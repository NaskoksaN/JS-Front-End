function solve(speed, area) {
    const maxSpeedMotorway = 130;
    const maxSpeedInterstate = 90;
    const maxSpeedCity = 50;
    const maxSpeedResidential = 20;
    const isMotorway = area === 'motorway';
    const isInterstate = area === 'interstate';
    const isCity = area === 'city';
    const isResidential = area === 'residential';

    let difference = 0;
    let limit = 0;

    limit = isMotorway ? maxSpeedMotorway
        : isInterstate ? maxSpeedInterstate
        : isCity ? maxSpeedCity
        : isResidential ? maxSpeedResidential : 0;

    if (isMotorway && speed > maxSpeedMotorway ) {
        difference = speed - maxSpeedMotorway;
    } else if (isInterstate && speed >  maxSpeedInterstate) {
        difference = speed - maxSpeedInterstate;
    } else if (isCity && speed > maxSpeedCity) {
        difference = speed - maxSpeedCity;
    } else if (isResidential && speed > maxSpeedResidential ) {
        difference = speed - maxSpeedResidential;
    }
    
    if (difference === 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status = difference > 0 && difference <= 20 ? 'speeding'
                : difference > 20 && difference <= 40 ? 'excessive speeding'
                : difference > 40 ? 'reckless driving' : '';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');