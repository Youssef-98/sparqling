import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked endpoint = 'https://dbpedia.org/sparql';

  @action
  setEndpoint(e) {
    if (e.target.value === '') {
      this.endpoint = '';
    } else {
      this.endpoint = e.target.value;
    }
  }
}
