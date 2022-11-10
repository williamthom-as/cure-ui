import { AppService } from "./services/app-service";

export function configure(aurelia) {
  aurelia.use.standardConfiguration();
  aurelia.use.feature('resources');
  if (process.env.NODE_ENV === 'production') {
    aurelia.use.developmentLogging('warn');
  } else {
    aurelia.use.developmentLogging('info');
    aurelia.use.plugin('aurelia-testing');
  }

  // Service registry
  aurelia.use.singleton('AppService', AppService)
  aurelia.start().then(() => aurelia.setRoot());
}
