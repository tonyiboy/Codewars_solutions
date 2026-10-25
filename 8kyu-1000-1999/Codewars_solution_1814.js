// Your phone shows its battery as a row of 5 bars. Each full bar represents 20% of charge. A bar only lights up when its whole 20% is reached.

// Write a function battery_bars(percent) that returns the battery as a string: # for a lit bar, . for an empty one, all wrapped in square brackets.

// Examples
// battery_bars(100)  # => "[#####]"
// battery_bars(70)   # => "[###..]"
// battery_bars(20)   # => "[#....]"   
// battery_bars(19)   # => "[.....]"
// battery_bars(0)    # => "[.....]"
// Notes
// percent is an integer from 0 to 100

function batteryBars(percent) {
     let lit = 0;
    let empty = 0;

    for (let i = 1; i <= 5; i++) {
        if (percent >= i * 20) {
            lit++;
        } else {
            empty++;
        }
    }

    return "[" + "#".repeat(lit) + ".".repeat(empty) + "]";
}