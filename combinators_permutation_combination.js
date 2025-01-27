// Optimized factorial function
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate permutations (P(n, r))
function permutations(n, r) {
    if (r > n) {
        return 0; // Invalid case
    }

    // Directly calculate the numerator and denominator
    let result = 1;
    for (let i = n; i > n - r; i--) {
        result *= i;
    }
    return result;
}

// Function to calculate combinations (C(n, r))
function combinations(n, r) {
    if (r > n) {
        return 0; // It's impossible to choose more items than available
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Problem 1:
// Unfortunately you can’t remember the code for your four-digit lock. 
// You only know that you didn’t use any digit more than once. 
// How many different ways do you have to try? 
// What do you conclude about the safety of those locks?
// Answer : There are 10 digits (0, 1, …, 9) and each one appears at most once. The number of orderings of these digits is 10P4 = 5040. It would take a very long time to test that many combinations, so 4-digit locks are very safe
console.log(`P(${10}, ${4}) =`, permutations(10, 4)); //5040

// Problem 2:
// There are 10 children in your class but you can invite only 5 to your birthday party.
// How many different combinations of friends could you invite? Explain whether to use combinations or permutations
// Answer : The number of combinations of friends you can invite is 10C5 = 252. We used combinations because it doesn’ matter which order we invite the friends in, on which ones we invite.



console.log(`P(${10}, ${5}) =`, combinations(10, 5)); //252
