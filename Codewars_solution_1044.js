// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function() {
    switch(Math.floor(Math.random() * 4)) {
      case 0:
        this.color = 'white';
        break;
      case 1:
        this.color = 'yellow';
        break;
      case 2:
        this.color = 'purple';
        break;
      case 3:
        this.color = 'red';
        break;
      default:
        this.color = 'white';  
    }
  };