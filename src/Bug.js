'use strict';

import templates from './Bug.soy.js';
import core from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './ComponentOne';
import './ComponentTwo';

class Bug extends Component {
	onClick_() {
		this.show = !this.show;
	}
}

Bug.STATE = {
	show: {
		validator: core.bool,
		value: false
	}
};

Soy.register(Bug, templates);

export default Bug;
