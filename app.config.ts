import 'dotenv/config';

export interface AppConfig {
  API_URL: string,
}

export default {
  name: 'BeautyMyanmar',
  version: '1.0.0',
  extra: {
    API_URL: process.env.API_URL,
  },
};