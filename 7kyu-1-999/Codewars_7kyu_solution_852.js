// Generate HTML links
// We need a HTML menu.... but writing HTML over and-over-again is boooring... 
// Let's just generate it instead!

// Task:
// Write a function generateMenu() with the following inputs/output:

// Inputs:

// menuItems: An array of objects (with url and text properties), which represents our menu items

// Output:

// A string of HTML containing an anchor tag for each element of menuItems (with 
// the appropriate href attribute and text content)

function generateMenu (menuItems) {
    
    let html = ""
    
    for (let i of menuItems) {
      html += `<a href="${i.url}">${i.text}</a>`
    }
    
    
    return html
}





