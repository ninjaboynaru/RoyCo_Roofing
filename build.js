var Metalsmith = require('metalsmith');
var Markdown = require('metalsmith-markdown');
var Layout = require('metalsmith-layouts');
var Handlebars = require('handlebars');


var workingSmith = Metalsmith(__dirname);


var layoutOptions = {engine:'handlebars', directory:'./layouts'};

workingSmith.use(Markdown() );
workingSmith.use(Layout(layoutOptions) );
workingSmith.destination('./docs');
workingSmith.build(function(error){if(error){console.log(error)} } );