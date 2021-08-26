import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PlaygroundController extends Controller {
  @tracked
  endpoint = 'https://dbpedia.org/sparql';

  @action
  setEndpoint(event) {
    this.endpoint = event.target.value;
  }
}
