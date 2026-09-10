"use strict"

// Implement a function that returns true when a given string only contains a single digit (0-9), 
// false otherwise.

String.prototype.digit = function() {
   if (this.length !== 1 || this.charCodeAt(0) < 48 || this.charCodeAt(0) > 57) {
        return false;
    } else {
        return true;      
    }
};


