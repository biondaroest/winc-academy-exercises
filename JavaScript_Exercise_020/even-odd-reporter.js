
for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    // console.log(i % 2);

    const isOdd = i % 2;
    if (isOdd === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd")
    }
    // console.log(" ");
}
