function lifeInWeeks(age) {
        var daysLeft = 32850 - (age * 365);
        var weeksLeft = 4680 - (age * 52);
        var monthsLeft = 1080 - (age * 12);
        console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
    }
    
lifeInWeeks(56);
    
    function lifeInWeeks1(age) {
            var ageCalc = 90 - age
            var daysLeft = ageCalc * 365;
            var weeksLeft = ageCalc * 52;
            var monthsLeft = ageCalc * 12;
            console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
        }
        
lifeInWeeks1(17);
