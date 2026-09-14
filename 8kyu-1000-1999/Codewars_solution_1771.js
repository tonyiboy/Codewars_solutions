"use strict"

// Classy Classes
// This kata is aimed at teaching basics about classes.

// Task
// Your task is to complete the Person class. It should have a constructor that accepts 
// a person's name as string and a person's age as integer.

// It should also have an info / Info (C#) property/getter/accessor/field (depending on your language) 
// which should evaluate to a formatted string like "johns age is 34", using the person's age and name.

class Person {
  constructor(name, age) {
    this.info = `${name}s age is ${age}`;   
  }
}



