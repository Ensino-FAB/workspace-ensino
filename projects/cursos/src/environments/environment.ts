// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CURSOS_HREF: 'http://localhost:4200/esistens-cursos/',
  ORGANIZACIONAL_HREF: 'http://localhost:4200/esistens-organizacional/',
  CURSOS_CONCLUSAO_HREF: 'http://localhost:4200/esistens-cursos-conclusao/',
  CURSO_API: 'http://localhost:8080/esistens-cursos-api',
  KEYCLOAK_URL: 'http://localhost:8084/auth',
  KEYCLOAK_REALM: 'FAB',
  KEYCLOAK_CLIENT_ID: 'ensino-client',
  KEYCLOAK_REDIRECT_URI:
    'http://localhost:4200/esistens-cursos/assets/silent-check-sso.html',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
