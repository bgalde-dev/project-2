//  Read in average_salary.csv
d3.csv("data/average_salary.csv").then(function (data) {
    console.log(data);
    buildCharts(data)
});

// Build Chart
function buildCharts(data) {

    // Filter object by ID Industry Group
    var results = d3.nest()
        .key(d => d["IndustryGroup"])
        .rollup(v => d3.mean(v, a => a.AverageWage)).sortValues()
        .entries(data)

    results.sort((a, b) => (a.value > b.value) ? 1 : -1);
    
    console.log(results);

    // x
    var names = results.map(r => r.key);

    // y
    var averageWage = results.map(r => r.value);

    console.log(names);

    console.log(averageWage);

    // Bar chart
    var barData = [{
        x: averageWage,
        y: names,
        text: names,
        type: "bar",
        orientation: "h"

    }];

    //Plot
    Plotly.newPlot("bar", barData);

}


