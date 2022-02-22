const BASE_URL: string | undefined = process.env.VUE_APP_BASE_URL;
const TIMEOUT: number | undefined = Number(process.env.VUE_APP_TIMEOUT);

export { BASE_URL, TIMEOUT };
