
function Future_Value(){ // function wrapper so I can use a button to run in HTML.
    let investment = 0;

    do {
        investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000)); // get data from textbox in float form
    }
    while(isNaN(investment)); // while the data in investment is NaN run the code
    let rate = 0;
    do{
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5)); // get data from textbox in float form
    }
    while(isNaN(rate)); // while the data in rate is NaN run the code

    let years = 0;
    do{
        years = parseInt(prompt("Enter nuber of years", 10)); //get data from textbox in int form
    }
    while(isNaN(years)); // while the years in investment is NaN run the code

    let futureValue = investment;
    for(let i = 1; i <= years; i++)
    {
        futureValue += (futureValue * rate) / 100; /* get futureValue by multiplying rate and dividing by 100 for 
                                                      a fraction this is then added back into futureValue*/
    }
    // Get total profit byt subtracting the future value from the investment.
    
    let profit = futureValue - investment; // profit is futureValue minus the inital investment.

    // There was some loading and formatting errors using the old code to update the webpage
    // New input using getElementById.
    
    // Display Investment Amount  
    document.getElementById('investment_amount').innerHTML = "<br>Investment Amount: $" + 
    investment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Display Investment Rate
    document.getElementById('investment_rate').innerHTML = "Investment Rate: " + rate + "%";
    
    // Display Years
    document.getElementById('years').innerHTML = "Years: " + years;

    // Display Future Value
    document.getElementById('results').innerHTML = "Future Value: $" + 
    futureValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 
    `<hr style = "width: 300px;">`;

    // Display Profit -- extra added on to this program
    document.getElementById('profit').innerHTML = "Profit: $" + 
    profit.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 
    "<br>"+ "<br>";
}