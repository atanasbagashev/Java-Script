function calculatePrice(groupType, groupSize, dayOfWeek) {
  const priceTable = {
    Friday: { Students: 8.45, Business: 10.9, Regular: 15 },
    Saturday: { Students: 9.8, Business: 15.6, Regular: 20 },
    Sunday: { Students: 10.46, Business: 16, Regular: 22.5 },
  };

  let basePrice = priceTable[dayOfWeek][groupType] * groupSize;

  if (groupType === "Students" && groupSize >= 30) {
    basePrice *= 0.85;
  } else if (groupType === "Business" && groupSize >= 100) {
    basePrice -= 10 * priceTable[dayOfWeek]["Business"];
  } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
    basePrice *= 0.95;
  }

  console.log(`Total price: ${basePrice.toFixed(2)}`);

  return basePrice.toFixed(2);
}

calculatePrice("Students", 30, "Sunday");
