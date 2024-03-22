/**
 * Author:Samuel Marsh
 * Date:3/21/2024
 * File Name:weight-converter.js
 * Description:Simple Weight Converter
*/

"use strict";

// TODO: Implement the weight conversion logic here

// Check if a command line argument is provided
if (process.argv.length < 3) {
    console.error('Usage: node weight-converter.js <pounds>');
    process.exit(1);
  }

  // Check if the command line argument is a number
  const weightInPounds = parseFloat(process.argv[2]);
  if (isNaN(weightInPounds)) {
    console.error('Input must be a number.');
    process.exit(1);
  }

  // Convert the weight to kilograms
  const weightInKilograms = (weightInPounds * 0.453592).toFixed(2);

  // Print the result
  console.log(`${weightInPounds} pounds is equal to ${weightInKilograms} kilograms.`);