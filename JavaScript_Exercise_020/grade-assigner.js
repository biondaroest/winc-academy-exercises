
// Grade assigner

function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}

for (let score = 60; score <= 100; score++) {
    assignGrade(score);
    console.log("For scoring " + score + " points, your get an " + assignGrade(score));
}
