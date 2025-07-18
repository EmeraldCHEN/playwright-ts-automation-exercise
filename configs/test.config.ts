import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `../env/.env.${env}`) });

export const config = {
  baseURL: process.env.BASE_URL!,
};
