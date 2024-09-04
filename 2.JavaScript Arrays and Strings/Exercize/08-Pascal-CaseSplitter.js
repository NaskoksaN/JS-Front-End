function solve(input) {
    const regexPattern = /[A-Z][a-z]*/g;
    //const result = regexPattern.test(input); 
    const result = input.match(regexPattern);
    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');