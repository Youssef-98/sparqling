import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hands-on/part1/exercise2', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hands-on/part1/exercise2');
    assert.ok(route);
  });
});
