d3.csv( "/data/simple_2007_2019.csv")
 .then(  function(data) {
    return {
      AcademicYear: d.AcademicYear,
      InState: d.InState,
      InternationalStatus: d.InternationalStatus,
      Ethnicity: d.Ethnicity,
      ChurchAffiliation: d.ChurchAffiliation,
      ClassLevel: d.ClassLevel,
      Gender: d.Gender,
      StudentCount: +d.StudentCount
    });
    
countries.sort((a,b) => b.AcademicYear - a.AcademicYear)

let margin = {top: 30, right: 30, bottom: 30, left: 23}
let width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

d3.select('body')
.select('svg')
.attr('id', 'container')
.attr ('width', 600)
.attr ('height', 600)
.style('color', 'SkyBlue')