//  Read in average_salary.csv
d3.csv("data/average_salary.csv").then(function (data) {
    console.log(data);
});

// Build Chart
function buildCharts(sample) {

    // Data Samples
    d3.csv("data/average_salary.csv", function (data) {
        var sampleInfo = data.average_salary;
        console.log(sampleInfo);

        // Filter object by ID Industry Group
        var results = sampleInfo.filter(sampleObj => sampleObj.IDIndustryGroup == sample)[0];
        console.log(results);

        // Set variables xaxis (average salary)
        var averageSalary = results.sample_values.slice(0, 10).reverse();
        console.log(averageSalary);

        // var otuLabels = results.otu_labels.slice(0, 10).reverse();
        // console.log(otuLabels);

        // y (industries name)
        // var yticks = otuIDs.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse();
        
        // Bar chart
        var barData = [{
            x: averageSalary
            // y: yticks, 
        //     text: otuLabels, 
        //     type: "bar",
            // orientation: "h"

        }];

        //Plot
        Plotly.newPlot("bar", barData);

    });
}


// // Drop down menu
// function init() {
//     var dropDown = d3.selectAll("#selDataset");

//     // Add sample names to a variable
//     d3.json("samples.json").then((data) => {
//         var sampleNames = data.names;

//         sampleNames.forEach((sample) => {
//             dropDown
//                 .append("option")
//                 .text(sample)
//                 .property("value", sample);
//         });

//         var firstSample = sampleNames[0];
//         buildCharts(firstSample);
//         buildMetadata(firstSample);

//     });
// }

// function optionChanged(newSample) {
//     buildCharts(newSample);
//     buildMetadata(newSample);
// }

// init();

// // Display the sample Metadata
// function buildMetadata(sample) {
//     d3.json("samples.json").then((data) => {
//         var sampleMeta = data.metadata;
        
//         var results = sampleMeta.filter(sampleObj => sampleObj.id == sample)[0];

//         var panelData = d3.select("#sample-metadata");

//         panelData.html("");

//         Object.entries(results).forEach(([key, value]) => {
//             panelData.append("h6").text(`${key} : ${value}`);

//         });
//     });
// }