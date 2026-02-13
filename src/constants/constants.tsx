// Read from .env via webpack EnvironmentPlugin
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
export const BASE_PATH = process.env.BASE_PATH;

// Local data file paths (served from data/ directory)
export const GEOJSON_URL_HEATMAP = 'data/COVID.json'
export const GEOJSON_URL_PLAYGROUND = 'data/playground.geojson'
export const GEOJSON_URL_MAP1 = 'data/map1_modified.json'
export const GEOJSON_URL_MAP2 = 'data/map2_modified.geojson'
export const GEOJSON_URL_MAP3 = 'data/map3_modified.geojson'
export const GEOJSON_URL_MAP4 = 'data/map4_modified.geojson'

export const DATA_URL_HEATMAP = 'data/map1.csv'
export const DATA_URL_MAP1 = 'data/map1.csv'
export const DATA_URL_MAP2 = 'data/map2.csv'
export const DATA_URL_MAP3 = 'data/map3.csv'
export const DATA_URL_MAP4 = 'data/map4.csv'

// IFRAME URLs - unchanged
export const IFRAME_URL_AUDIOM_MAP1 = "https://www.audiom.net/embed/15?apiKey=b_e0xbMW4_hk9tDtOYMrZ&showVisualMap=false"
export const IFRAME_URL_AUDIOM_MAP2 = "https://www.audiom.net/embed/16?apiKey=b_e0xbMW4_hk9tDtOYMrZ&showVisualMap=false"
export const IFRAME_URL_AUDIOM_MAP3 = "https://www.audiom.net/embed/17?apiKey=b_e0xbMW4_hk9tDtOYMrZ&showVisualMap=false"
export const IFRAME_URL_AUDIOM_MAP4 = "https://www.audiom.net/embed/18?apiKey=b_e0xbMW4_hk9tDtOYMrZ&showVisualMap=false"
