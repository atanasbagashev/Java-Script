function radar(speed, area) {
    'use strict';
  
    let speedLimit = 0;
    if (area === 'motorway') {
      speedLimit = 130;
    } else if (area === 'interstate') {
      speedLimit = 90;
    } else if (area === 'city') {
      speedLimit = 50;
    } else if (area === 'residential') {
      speedLimit = 20;
    }
  
    if (speed > speedLimit) {
      let difference = speed - speedLimit;
      let status = '';
  
      if (difference > 0 && difference <= 20) {
        status = 'speeding';
      } else if (difference > 20 && difference <= 40) {
        status = 'excessive speeding';
      } else if (difference > 40) {
        status = 'reckless driving';
      }
  
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
  
  radar(200, 'motorway');
  