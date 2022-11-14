# cure-ui

A simple app to provide a visual tool for generating Cure templates.

To find out more about Cure, [click here](https://github.com/williamthom-as/cure)

## Screenshot

![cure_template](https://user-images.githubusercontent.com/8381190/201656101-bedc4871-4bfd-41c0-a26e-3e8d03773eb6.png)

## Run in dev mode, plus watch

    npm start

## Run in production mode, plus watch

It updates index.html with hashed file name.

    npm run start:prod

## Build in dev mode

Generates `dist/*-bundle.js`

    npm run build:dev

## Build in production mode

    npm run build

It builds `dist/*-bundle.[hash].js`, updates index.html with hashed js bundle file name. To deploy to production server, copy over both the generated `index.html` and all the `dist/*` files.

For example
```
index.html
dist/entry-bundle.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/dist/entry-bundle.12345.js
```
## To clear cache

Clear tracing cache. In rare situation, you might need to run clear-cache after upgrading to new version of dumber bundler.

    npm run clear-cache


