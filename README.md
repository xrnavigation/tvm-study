# TVM Study

## Live Site

[View the live site here.](https://xrnavigation.github.io/tvm-study/)

## Setup

### 1. Configure environment variables

Copy the example environment file and add your Mapbox access token:

```bash
cp .env-example .env
```

Edit `.env` and replace `<your mapbox access token>` with your actual Mapbox token.

To obtain a Mapbox access token:
1. Create a free account at [mapbox.com](https://account.mapbox.com/auth/signup/)
2. Navigate to your [Account page](https://account.mapbox.com/)
3. Copy your **Default public token** (starts with `pk.`)
4. Paste it as the `ACCESS_TOKEN` value in your `.env` file

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Run the development server

```bash
npm start
```

The app will open at [localhost:8080](http://localhost:8080).
