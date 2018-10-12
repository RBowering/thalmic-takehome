require('./panel.less');
const React       = require('react');
const createClass = require('create-react-class');
const cx          = require('classnames');

const Panel = createClass({
	displayName : 'Panel',
	getDefaultProps() {
		return {
			icon   : false,
			header : false,
			footer : false,
		};
	},
	render(){
		const rootClassname = cx({
			'panel__wrapper--icon' : !!this.props.icon,
		}, 'panel__wrapper');

		return <div className={rootClassname}>
			{
				this.props.icon && <div className='panel__icon'>
					{this.props.icon}
				</div>
			}
			{
				this.props.header && <div className='panel__header'>
					{this.props.header}
				</div>
			}
			<div className='panel__body'>
				{this.props.children}
			</div>
			{
				this.props.footer && <div className='panel__footer'>
					{this.props.footer}
				</div>
			}
		</div>;
	},
});

module.exports = Panel;
