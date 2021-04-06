//  Read in average_salary.csv
d3.csv("data/average_salary.csv").then(function (data) {
    console.log(data);
    // buildCharts("722")
});

// Build Chart
function buildCharts(IDIndustryGroup) {

    // Data Samples
    d3.csv("data/average_salary.csv").then(function (data) {
        var object = data;
        console.log(object);

        
        // Filter object by ID Industry Group
        var results = object.groupBy(IDIndustryGroup)[0];
        console.log(results);

        // Set variables xaxis (average salary)
        var averageSalary = results.AverageWage;
        console.log(averageSalary);


        // y (industries name)
        var yticks = results.IDIndustryGroup.slice(0,10).reverse();
        console.log(yticks);

        var labels = results.IndustryGroup.slice(0, 10).reverse();
        console.log(labels);

        // Bar chart
        var barData = {
            x: averageSalary,
            y: yticks, 
            text: labels, 
            type: "bar",
            orientation: "h"

        };

        //Plot
        Plotly.newPlot("bar", barData);

    });
}


