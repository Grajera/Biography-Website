
function ordering() // function wrapper so i can use a button to run script in HTML
{

    let userInput = 0; // init userInput
    let arr = []; // init array
    let inputNums = 5;
    // get user input in ptompts
    
    // NOTE: I really wanted to do something where you can chose the number of inputs 
    // but its not in the instructions

    // Would look like this:   
    //inputNums = parseInt(prompt("Enter the amount of numbers you want to sort!", 5));
    //To implement that. Uncomment the above code.

    for(let i = 0; i < inputNums; i++){
        userInput = parseInt(prompt("Enter a number to add to the list!", 10));
        arr[i] = userInput; // put userinput into array arr at index [i];
    }
    
    // sort array 
    arr.sort(function(a, b) {
        return a - b; // smallest number first
      });

    // Put the array in the sorted_array div in HTML wrapped in <p> tags and the
    // .toString makes the number a string 
    // .replace function pops a comma in the string every 3 chars or in this case numbers. 
    document.getElementById('sorted_array').innerHTML = `<br>` + "Sorted List of Numbers: "+ `<br>`+ 
    `<br>`+ `<p>` + arr.join(`</p><p>`).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</p>` + `<br>`;

}