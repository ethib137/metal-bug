import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './ComponentOne.soy';

class ComponentOne extends Component {
	onClick_() {
		this.label = 'Wow a Label!';
	}
}

ComponentOne.STATE = {
	label: {
		validator: core.isString,
		value: ''
	}
};

Soy.register(ComponentOne, templates);

export default ComponentOne;
