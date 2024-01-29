interface Env {
    production: boolean;
    AMYR_SMART_BASE_URL: string;
}

const env: Env = {
    production: false,
    AMYR_SMART_BASE_URL: 'https://api-amyrsmart.appzone.dev'
}

export { env };