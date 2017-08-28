var gulp = require('gulp');
var gulpRun = require('gulp-run');

var buildFilePath = 'build.js';
var pathsToWatch = ['src/**/*', 'layouts/**/*', 'partials/**/*', 'build.js'];


gulp.task('auto-build', function()
{
	gulp.watch(pathsToWatch, ['build']);
});


gulp.task('build', function(){

	var cmdToRun = 'node ' + buildFilePath;
    // handle the error. don't let it stop gulp! NOTHING STOPS GULP!
	return gulpRun(cmdToRun).exec().on('error', HandleError);
	
	function HandleError(error)
	{
		console.log("gulp-run ERROR attempting to run: " + cmdToRun);
		console.log("---- ERROR BELLOW ----");
		console.log(error);
		console.log("---- ERROR END ----")
		this.emit('end'); // Keeps things going
	}

});



/*
	PURPOSE: Automate the building of a metalsmith project
	
	OVERVIEW:
	Will call "node {buildFilePath}" on the command line every time there is a change in any file
	in the specefied paths to watch "pathsToWatch"
	
	"buildFilePath" should be the path to a .js file that runs "metalsmith.build()", wich should result in metalsmith
	building the project and populating the build folder (or an alternative folder as specified by metalsmith)
	
	ERRORS:
	Errors while running "node {buildFilePath}" will not stop gulp.watch. It will contniue watching.
*/


