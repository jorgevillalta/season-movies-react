import { configure } from '@storybook/react';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';
import '@blueprintjs/table/lib/css/table.css';
import 'normalize.css/normalize.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
