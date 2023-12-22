function calculateDateDifference(fixedDay) {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
    var currentYear = currentDate.getFullYear();

    // Adjust the current date to the fixed day
    if (currentDay < fixedDay) {
    currentMonth -= 1;
    if (currentMonth < 1) {
        currentMonth += 12;
        currentYear -= 1;
    }
    }

    var yearDiff = currentYear - 2023; // Replace 2023 with the year you want to compare to
    var monthDiff = currentMonth;

    return yearDiff + " yr " + monthDiff + " mo";
}

// Example usage with a fixed day of 15
var fixedDay = 15; // Change this value as needed
var result = calculateDateDifference(fixedDay);
document.getElementById("dateDifference").innerHTML = result;

