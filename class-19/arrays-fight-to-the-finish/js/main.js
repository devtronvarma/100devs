//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = [
    'Bring It On',
    'Bring It On Again',
    'It Has Already Been Brought'
]

movies.forEach((x) => document.querySelector('h2').innerText += x);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30]

nums.forEach((x, i) => {
    nums[i] = x + 3;
})

//Find the average of all the numbers from question three
let avg = nums.reduce((c, i) => c += i) / nums.length;
