// Task
// Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.
// Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, 
// and then answer my three questions. If the answer is correct, you will pass the test. Note: the decryption 
// should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; 
// The shift mode is a cyclic shift, for example:
// character "A" after decryption should be "X" instead of ">"
// character "B" after decryption should be "Y" instead of "?"
// character "C" after decryption should be "Z" instead of "@"
// character "a" after decryption should be "x" instead of "^"
// character "b" after decryption should be "y" instead of "_"
// character "c" after decryption should be "z" instead of "`"
// Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".
// This task may be more difficult for beginners. Good Luck!
// Some trainer may have doubts about the three questions, the following is some explanation, I hope to be helpful to the trainer.
// for example, after you click "submit", you see these text on your screen:
// Top secret files: No. 3330
// Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.
// and then:
// question 1 should answer:"3330"
// question 2 should answer:"eEB"
// question 3 should answer:"Apple core"
// if you haven't seen something like the text above, perhaps your decryption code is not correct ;-)
// Although the text is not the same every time, the next time may appear:
// Top secret files: No. 2135
// Super agent ZIUScE, on a dark night, stole the Lolli pop from National Museum, causing $100 million in damage.
// You only need to choose one of the text as the answer to the question. That is to say, any one of them is the correct answer.

const topSecret = str => str.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)))

//question1: The top secret file number is...
answer1="1850"
//question2: Super agent's name is...
answer2="fQT"
//question3: He stole the treasure is...
answer3="Train tire"