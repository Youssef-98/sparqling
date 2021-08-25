import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked endpoint = 'https://codex.opendata.api.vlaanderen.be:8888/sparql';

  @action
  setEndpoint(e) {
    this.endpoint = e.target.value;
  }
}
