// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // serverUrl: 'https://www.sbsucess.co:8003/api',
  serverUrlHelperPDF: 'http://34.170.219.67:8005/api',
  serverUrl: 'http://34.170.219.67:8006/api',
  daysTokenExpire: 4,
  timeExpiredSession: 1800000
};
