import { ConfigType, registerAs } from '@nestjs/config';

import { env, envNumber } from '~/core/env';

export const appRegToken = 'app';
export const AppConfig = registerAs(appRegToken, () => ({
  name: env('APP_NAME'),
  port: envNumber('APP_PORT', 8000),
}));

export type IAppConfig = ConfigType<typeof AppConfig>;
