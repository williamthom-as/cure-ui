import {inject} from 'aurelia-framework';

@inject('AppService')
export class App {
  scheme = 'auto';

  constructor(appService) {
    this.appService = appService;
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Cure Utilities";
    config.options.pushState = true;
    config.options.root = '/';

    config.mapUnknownRoutes('not-found.html');
    config.map([{
      route: ['', 'builder'],
      moduleId: './routes/builder/index',
      name: 'builder',
      title: 'Builder',
      description: 'Request form builder',
      nav: true,
      settings: {
        icon: 'fas fa-file-code',
        description: 'Create/edit policy'
      }
    }]);
  }

  navigateMenu(routeHref) {
    this.opened = null;
    this.router.navigate(routeHref, {});
  }

  changeScheme(scheme) {
    this.scheme = scheme;
    document.firstElementChild.setAttribute('color-scheme', scheme);
  }
}
