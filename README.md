# jolieboutique (jolieboutique)

### FRONT :

# Install the dependencies
```bash
yarn
```

# Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

# Start the app in development mode from iOS Device (hot-code reloading, error reporting, etc.)
```bash
quasar dev -m capacitor -T
```


# Build the app for production
```bash
quasar build
```

### BACKEND :

## Install PostGreeSQL App, create a local database and a user
# Find the database config in backend, 'backend/app/.env', you will get the following content :
```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=X--Qkg69y4Whet87cGW-INBzFfxjoLth
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_USER=admin
DB_PASSWORD=Password12&
DB_NAME=shop
SESSION_DRIVER=cookie
```

Replace the database variables with your own

# Install the dependencies
```bash
yarn
```

You need to run seed before run the backend

# Run seed
```bash
node ace seed:shop
```

# Run backend
```bash
node ace serve --watch
```
```


