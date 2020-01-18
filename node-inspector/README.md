# Node.js inspector

The minimalist project example includes a database of stores with coordinates and categories. The express endpoint filter stores by parameters (categories, latitude, longitude, radius, limit).

It is a small extract of the original project [storelocatorjs](https://github.com/yoriiis/storelocatorjs).

## Available npm scripts

* `npm start`
* `npm inspect`

## Demo steps

* Run npm script `npm start`
* Access the [webservice](http://localhost:3000/?lat=48.8589507&lng=2.2770202&categories[]=1&radius=50&limit=10)
* Add breakpoints into files in the directory `./src/`
* Run npm script `npm run debug`
* Run VS Code inspector listener
* Refresh the browser
* Manipulate the VS Code inspector
* Open the Chrome inspector
