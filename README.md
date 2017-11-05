# GIPHY Search

## Purpose

Use this app to search for GIFs from [GIPHY](https://giphy.com/).

### Getting Started

1. Install dependencies:

		npm install
		or
		yarn install

2. Create a `config.js` inside of the `src` directory, and enter the parameters and [your GIPHY API key](https://developers.giphy.com/docs/#access):

		module.exports = {
		  baseUrl: 'https://api.giphy.com/v1/gifs/',
		  endpoint: 'search',
		  defaultEndpoint: 'trending',
		  limit: '12',
		  offset: '0',
		  rating: 'PG',
		  lang: 'en',
		  apiKey: 'YOUR_GIPHY_API_KEY'
		}

3. To start the dev server, run:

		npm run start
		or
		yarn start

4. Produce a production build by running:

		npm run build
		or
		yarn build

5. If you wish, publish to GitHub Pages by running:

		npm run deploy
		or
		yarn deploy

### Screenshot

![Search Results](https://user-images.githubusercontent.com/10244137/32419416-9612f672-c247-11e7-9c1f-46add3cb91aa.png)

Fig. 1 – Search results

### Potential Features

* Allow users to set the limit (up to a max, of course) on number of GIFs to retrieve
* Add option to get more GIFs after initial search results
* Allow users to mark and save favorite GIFs