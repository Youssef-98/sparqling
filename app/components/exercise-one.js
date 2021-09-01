import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ExerciseOneComponent extends Component {
  @tracked isOpen = false;

  @action
  showSnippet() {
    this.isOpen = !this.isOpen;
    return this.isOpen;
  }
}
