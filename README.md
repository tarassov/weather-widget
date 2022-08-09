# What is this all about

Simple weather widget that displays weather in the specified cities. The data is fetched from the [OpenWeather API](https://openweathermap.org/api)
&nbsp;

<img src="https://github.com/tarassov/weather-widget/raw/master/example/weather-widget.gif" width="300">

## DEMO: You can find the demo [HERE](https://tarassov.github.io/weather-widget/)

&nbsp;

# This project uses following technology stack:

- Vue.js 3.2
- Typescript

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Usage

You can add tjis widget by inserting the following code

```sh
   <weather-widget api_key="YOUR_OPENWATHER_API_KEY" />
```

[Example of the html page](https://github.com/tarassov/weather-widget/blob/master/example/index.html)

## Project Setup

If you want to run it locally then clone the repo and after:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
