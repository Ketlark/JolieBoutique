# jolieboutique (jolieboutique)

FRONT :

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Start the app in development mode from iOS Device (hot-code reloading, error reporting, etc.)
```bash
quasar dev -m capacitor -T
```


### Build the app for production
```bash
quasar build
```

BACKEND :

Install PostGreeSQL App, create a local database 'shop' and a user 'admin'

## Install the dependencies
```bash
yarn
```

You need to run seed before run the backend

## Run seed
```bash
node ace seed:shop
```

## Run backend
```bash
node ace serve --watch
```
```


