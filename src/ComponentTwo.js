import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './ComponentTwo.soy';

class ComponentTwo extends Component {
}

ComponentTwo.STATE = {
	show: {
		validator: core.bool,
		value: false
	}
};

Soy.register(ComponentTwo, templates);

export default ComponentTwo;
