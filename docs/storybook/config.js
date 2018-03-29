import { configure } from '@storybook/vue'

import Vue from 'vue'
import Tree from '../../dist/liquor-tree.esm'

Vue.component('tree', Tree)

function loadStories() {
  require('./stories/index')
  require('./stories/options')
}

configure(loadStories, module)
