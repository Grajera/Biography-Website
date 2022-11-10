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
   
    

    document.write(`<p><label>Investment amount: </label>${investment}</p>`);
    document.write(`<p><label>Investment rate: </label>${rate}</p>`);
    document.write(`<p><label>Years: </label>${years}</p>`);
    document.write(`<p><label>Future Value: </label>${futureValue.toFixed(2)}</p>`);