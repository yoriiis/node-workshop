# Node.js inspector

The minimalist project example includes a database of stores with coordinates and categories. The express endpoint filter stores by parameters (categories, latitude, longitude, radius, limit).

It is a small extract of the original project [storelocatorjs](https://github.com/yoriiis/storelocatorjs).

[License storelocatorjs](https://github.com/yoriiis/storelocatorjs#licenses)

## Available npm scripts

- `npm start`
- `npm run inspect`

## Demo steps

- Run `npm start`
- Access the [webservice](http://localhost:3000/?lat=48.8589507&lng=2.2770202&categories[]=1&radius=50&limit=10)
- Add breakpoints into the plugin
- Run `npm run inspect`
- Run VS Code debug _Node: Nodemon_
- Refresh the browser
- Manipulate the VS Code inspector
- Test VS Code debug _Node: Chrome_
