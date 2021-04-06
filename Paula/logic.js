//  Read in average_salary.csv
d3.csv("data/average_salary.csv").then(function (data) {
    console.log(data);
    buildCharts(data)
});

// Build Chart
function buildCharts(data) {

    // Create objects with Industry Group and Average Wage
    var results = d3.nest()
        .key(d => d["IndustryGroup"])
        .rollup(v => d3.mean(v, a => a.AverageWage))
        .entries(data)

    results.sort((a, b) => (a.value > b.value) ? 1 : -1);

    console.log(results);

    // x
    var names = results.map(r => r.key).slice(0, 10);

    // y
    var averageWage = results.map(r => r.value).slice(0, 10);

    console.log(names);

    console.log(averageWage);

    // Bar chart
    var barData = [{
        x: averageWage,
        y: names,
        text: names,
        type: "bar",
        orientation: "h"
    }]
    
    var layout = {
        title: 'Average Salary by Industry',    
    };

    //Plot
    Plotly.newPlot("bar", barData, layout, {displayModeBar: true});

}


