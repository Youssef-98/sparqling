import EmberRouter from '@ember/routing/router';
import config from 'sparqling/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('types', { path: 'query-types' });
  this.route('playground');

  this.route('hands-on', function () {
    this.route('part1', { path: 'exercise-1' });
  });
});
