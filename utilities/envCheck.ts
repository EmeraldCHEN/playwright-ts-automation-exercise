import { config } from '@test.config';

export async function isEnvReachable(): Promise<boolean> {
  try {
    const res = await fetch(config.baseURL);
    return res.ok;
  } catch (err) {
    return false;
  }
}