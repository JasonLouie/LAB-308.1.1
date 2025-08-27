const distance = 1500, budget = 175, gallonCost = 3;

// Question 3
const slowestHours = distance/ 55;
const moderateHours = distance / 60;
const fastestHours = distance / 75;

// Question 1
const slowestGallons = (30 * slowestHours);
const moderateGallons = (28 * moderateHours);
const fastestGallons = (23 * fastestHours);

// Question 2
const isSlowestEnough = (slowestGallons * gallonCost) <= budget;
const isModerateEnough = (moderateGallons * gallonCost) <= budget;
const isFastestEnough = (fastestGallons * gallonCost) <= budget;

console.log(`The number of gallons at 55 miles per hour is ${slowestGallons}`);
console.log(`The number of gallons at 60 miles per hour is ${moderateGallons}`);
console.log(`The number of gallons at 75 miles per hour is ${fastestGallons}`);

console.log(`The budget is enough to cover the fuel expense: ${isSlowestEnough}`);
console.log(`The budget is enough to cover the fuel expense: ${isModerateEnough}`);
console.log(`The budget is enough to cover the fuel expense: ${isFastestEnough}`);

console.log(`The trip will take ${slowestHours} hours at 55 miles per hour.`);
console.log(`The trip will take ${moderateHours} hours at 60 miles per hour.`);
console.log(`The trip will take ${fastestHours} hours at 75 miles per hour.`);

// Traveling at an average of 75 miles per hour is more cost efficient and saves a lot more time. The other options take longer and cost a lot more.