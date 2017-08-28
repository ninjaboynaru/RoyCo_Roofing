



Personal website made for fictional company known as *RoyCo Roofing & Construction*.
This company is frequently mentiond on the online prank call show [Phone Losers of America](https://www.youtube.com/user/phonelosersofamerica)  


The site is generated using *Metalsmith* as a static site generator,
and Gulp to automate building the site.  

---

In loving memory of Roy Gerbil **Cactus Cactus**


## Build Process
- Run **node build.js** to build the site.
- Run **npm run auto-build** to auto build the site anytime a file is changed.
- Output files are in the */docs* folder.

## Build Asumptions
- Build/Metalsmith options and code in **build.js**
- auto-build gulp in **gulpfile.js**
- npm script to start auto build process in package.json as **"auto-build":"gulp auto-build"**
- gulp auto-build code will not stop due to error
> Error will be displayd to the console, but it will not stop the gulp watch process