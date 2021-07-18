Este es un proyecto creado con [React Native]

## Table of Contents

* [Scripts disponibles](#scripts)
	* [Install dependencies](#install)
  * [npm start](#npm-start)
  * [npm run android](#npm-run-android)
	* [create config](#config)

## Scripts
Antes de ejecutart los scripts instala las dependencias
# install
Ejecuta

```
npm install
# or
yarn install
```
### `npm start`

Para correr el servidor de desarrollo ejecuta

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run android`

Para ejecutar en andorid puedes correr

```
npm run android 
# or
yarn android
```

### `Config`

Para que la app funcione correctamente necesita crear el archivo config.js en src/
Este archivo debe contener las url de las apis y las keys para marvel api de la siguiente manera

```
export const config = {
  URL_INTELLI_API: 'https://api.myintelli.net/v1',
  URL_MARVEL: 'https://gateway.marvel.com',
  MARVEL_KEY: 'Your public key',
  MARVEL_PRIVATE_KEY: 'your private key',
  TS: 'marvel_api',
};
```
Solo cambia las Marvel Keys y listo.
