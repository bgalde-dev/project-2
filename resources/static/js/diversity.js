// Function feeds years into the dropdown from our csv file
function init(){
    var dropdown = d3.select("#selDataset");

    d3.csv("/data/GenderComposition.csv").then(function (data) {
        var yearList =[]
        for (var i=0; i < data.length; i++) {
            yearList.push(data[i].Year);
        }
        // creating a Set removes dupliates from our list
        var years = [...new Set(yearList)];

        for (var j=0; j < years.length; j++) {
            years[j] = parseInt(years[j]);
            dropdown.append("option").text(years[j]).property("value")
        };
        getChart(data);
    });
};

// function that captures changes in our dropdown
function optionChanged(id) {
    getChart(id);
};

// this is our main function to generate our charts based on dropdown selection
function getChart(id) {
    
    // this if verifies if there has been a selection made
    // when initially loading the page it will generate default charts
    if (typeof id == "string") { 
        
        // creating pie chart for dropdown selection
        d3.csv("/data/GenderComposition.csv").then(function(data) {
        
            var mPop=[]
            var fPop=[]
                      
            for (var i=0; i < data.length; i++) {
                if (data[i].Year.toString() === id) {    
                    if (data[i].Gender === "Male") {
                        mPop.push(data[i]["Total Population"]); 
                    } else {
                        fPop.push(data[i]["Total Population"]);
                    }   
                }
            }
                                    
            var data = [{
                values: [parseInt(mPop), parseInt(fPop)],
                type: "pie",
                labels: ["Male", "Female"],
                automargin: true,
                opacity: 0.7,
                marker: {
                    colors: ['rgb(0,0,102)', 'rgb(102,0,51)']
                },
                hoverinfo: "label+percent"

            }];

            var layout = {
                title: id + " Workforce Composition: Gender",
            };

            Plotly.newPlot("gauge", data, layout);
        });

        // creates bar chart for common jobs using dropdown selection
        d3.csv("/data/Wage_Gender_CommonJobs.csv").then(function(data) {
        
            var m_avgwage=[]
            var f_avgwage=[]
            var common_job=[]
            var t_avgwage=[]
            var m_wagetext=[]
            var f_wagetext=[]

            for (var i=0; i < data.length; i++) {
                            
                if (data[i].Year.toString() === id) {
                    common_job.push(data[i]["PUMS Occupation"])            
                    if (data[i].Gender === "Male") {
                        m_avgwage.push(data[i]["Average Wage"]);
                    } else {
                        f_avgwage.push(data[i]["Average Wage"]);
                    }
                } 
            }
            
            var jobs = [...new Set(common_job)];
            
            // create variables display wage in chart with format
            for (var j=0; j<m_avgwage.length; j++){
                t_avgwage[j]= parseInt(m_avgwage[j]) + parseInt(f_avgwage[j]);
                m_wagetext[j] = "$"+parseFloat(m_avgwage[j]).toFixed(2);
                f_wagetext[j] = "$"+parseFloat(f_avgwage[j]).toFixed(2);
            }
            
            var trace1 = {
                x: jobs,
                y: m_avgwage,
                type: 'bar',
                name: "Male",
                text: m_wagetext,
                textposition: 'auto',
                marker: {
                    color: 'rgb(0,0,102)',
                    opacity: 0.7
                }
            };

            var trace2 = {
                x: jobs,
                y: f_avgwage,
                type: 'bar',
                name: "Female",
                text: f_wagetext,
                textposition: 'auto',
                marker: {
                    color: 'rgb(102,0,51)',
                    opacity: 0.7
                }
            };

            var data = [trace1, trace2];

            var layout = {
                title: id + " Wages by Gender: Most Common Occupations",
                barmode: 'group'
            };

            Plotly.newPlot("bubble", data, layout);
        });
    // generates default charts when site is loaded
    } else {
        d3.csv("/data/GenderComposition.csv").then(function(data) {
        
            var yearList =[]
            var mPop=[]
            var fPop=[]
            var tPop=[]
            var mPer=[]
            var fPer=[]

            for (var i=0; i < data.length; i++) {
                yearList.push(data[i].Year);
                
                if (data[i].Gender === "Male") {
                    mPop.push(data[i]["Total Population"]); 
                } else {
                    fPop.push(data[i]["Total Population"]);
                }
            }
            
            // generates percentages to display in chart
            for (var j=0; j<mPop.length; j++){
                tPop[j]= parseInt(mPop[j]) + parseInt(fPop[j]);
                mPer[j] = parseFloat((parseInt(mPop[j])/parseInt(tPop[j]))*100).toFixed(1)+"%";
                fPer[j] = parseFloat((parseInt(fPop[j])/parseInt(tPop[j]))*100).toFixed(1)+"%";
            }
            var years = [...new Set(yearList)];
        
            var trace1 = {
                x: years,
                y: mPop,
                type: 'bar',
                name: "Male",
                text: mPer.map(String),
                textposition: 'auto',
                marker: {
                    color: 'rgb(0,0,102)',
                    opacity: 0.7
                }
            };

            var trace2 = {
                x: years,
                y: fPop,
                type: 'bar',
                name: "Female",
                text: fPer.map(String),
                textposition: 'auto',
                marker: {
                    color: 'rgb(102,0,51)',
                    opacity: 0.7
                }
            };

            var data = [trace1, trace2];

            var layout = {
                title: "Workforce Composition: Gender",
                barmode: 'group'
            };

            Plotly.newPlot("gauge", data, layout);
        });

        d3.csv("/data/Wage_Gender_CommonJobs.csv").then(function(data) {
        
            var m_avgwage=[]
            var f_avgwage=[]
            var common_job=[]
            var t_avgwage=[]
            var m_wagetext=[]
            var f_wagetext=[]
            
            for (var i=0; i < data.length; i++) {
                            
                if (parseInt(data[i].Year) === 2019) {
                    common_job.push(data[i]["PUMS Occupation"])            
                    if (data[i].Gender === "Male") {
                        m_avgwage.push(data[i]["Average Wage"]);
                    } else {
                        f_avgwage.push(data[i]["Average Wage"]);
                    }
                } 
            }
            
            var jobs = [...new Set(common_job)];
            
            for (var j=0; j<m_avgwage.length; j++){
                t_avgwage[j]= parseInt(m_avgwage[j]) + parseInt(f_avgwage[j]);
                m_wagetext[j] = "$"+parseFloat(m_avgwage[j]).toFixed(2);
                f_wagetext[j] = "$"+parseFloat(f_avgwage[j]).toFixed(2);
            }
            
            var trace1 = {
                x: jobs,
                y: m_avgwage,
                type: 'bar',
                name: "Male",
                text: m_wagetext,
                textposition: 'auto',
                marker: {
                    color: 'rgb(0,0,102)',
                    opacity: 0.7
                }
            };

            var trace2 = {
                x: jobs,
                y: f_avgwage,
                type: 'bar',
                name: "Female",
                text: f_wagetext,
                textposition: 'auto',
                marker: {
                    color: 'rgb(102,0,51)',
                    opacity: 0.7
                }
            };

            var data = [trace1, trace2];

            var layout = {
                title: "2019 Wages by Gender: Most Common Occupations",
                barmode: 'group'
            };

            Plotly.newPlot("bubble", data, layout);
        });

    }
}

init();