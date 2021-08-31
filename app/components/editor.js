import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditorComponent extends Component {
  @tracked
  endpoint = 'http://sparql-demo.s.redpencil.io:8890/sparql';

  @action
  setEndpoint(event) {
    this.endpoint = event.target.value;
  }
}
