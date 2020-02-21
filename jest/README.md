# jest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Installing bootstrap
- install bootstrap
 - `npm install bootstrap-vue bootstrap --save`
- Then, register BootstrapVue in your app entry point (main.js) 
 - `import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';`
 - `Vue.use(BootstrapVue)`
- And import Bootstrap and BootstrapVue css files in main.js:
 - `import 'bootstrap/dist/css/bootstrap.css'`
 - `import 'bootstrap-vue/dist/bootstrap-vue.css'`
