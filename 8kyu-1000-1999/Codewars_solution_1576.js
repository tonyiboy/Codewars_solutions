// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param){
    
    let bartender = ["Jabroni","School Counselor","Programmer","Bike Gang Member","Politician","Rapper"]
    let drinks = ["Patron Tequila","Anything with Alcohol","Hipster Craft Beer","Moonshine","Your tax dollars","Cristal"]
    
    let count= 0
    do{
      if(param.toLowerCase() === bartender[count].toLowerCase()){
        return drinks[count]
      }
      count++
    }while(count < bartender.length)
    return "Beer"
}