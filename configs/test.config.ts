import path from 'path';
import dotenv from 'dotenv';

// Load .env.dev or .env.test based on ENV variable
const env = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `../env/.env.${env}`) });

export const config = {
  baseURL: process.env.BASE_URL!,
};