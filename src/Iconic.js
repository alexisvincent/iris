import React from 'react'

export class Iconic extends React.Component {

	static propTypes = {
		icon: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.shape({
				state: React.PropTypes.object,
				name: React.PropTypes.string
			})
		]).isRequired
	}

	static defaultProps = {
		style: {}
	}

	componentDidMount() {
		iconic.inject(React.findDOMNode(this))
	}

	getIconClasses() {
		if (typeof this.props.icon === 'string') {
			return 'iconic iconic-fluid';
		}
		return 'iconic iconic-fluid ' + this.props.icon.className;
	}

	getIconState() {
		if (typeof this.props.icon === 'string' || !this.props.icon.state) {
			return '';
		}
		var state = this.props.icon.state;
		var ret = {};
		Object.keys(state).map(function (key) {
			ret['data-' + key] = state[key];
		});
		return ret;
	}

	getIconSrc() {
		if (typeof this.props.icon === 'string') {
			return './iconic/' + this.props.icon + '.svg';
		}
		return './iconic/' + this.props.icon.name + '.svg';
	}

	render() {
		var data = this.getIconState();
		var bg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
		return React.DOM.img(React.__spread({
			'className': this.getIconClasses(),
			'data-src': this.getIconSrc(),
			'src': bg
		}, data))
	}
}

export default React.createFactory(Iconic);