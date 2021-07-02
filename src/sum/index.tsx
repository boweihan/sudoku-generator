const sum = (numbers: string) => {
  if (!numbers) {
    return 0;
  }

  numbers = numbers.replace(/\n/g, ",");

  if (numbers.indexOf(",") === -1) {
    return parseInt(numbers);
  }

  let split = numbers.split(",");
  let sum = 0;

  for (let i = 0; i < split.length; i++) {
    sum += parseInt(split[i]);
  }

  return sum;
};

export default sum;
