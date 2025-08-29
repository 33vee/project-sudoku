function randomizer() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = nums.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[random]] = [nums[random], nums[i]];
  }
  return nums;
}

module.exports = randomizer();
