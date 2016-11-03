import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';


import { CSS_CLASS } from '../';
import MaterialColorPicker from 'react-material-color-picker';


const propTypes = {
	val: React.PropTypes.string.isRequired,
	ind: React.PropTypes.number.isRequired,
	settingsObj: React.PropTypes.object.isRequired, // verify this one
	valueUserInputHandler: React.PropTypes.func.isRequired,
	isCollapsed: React.PropTypes.bool.isRequired,
	// onCollapsed: React.PropTypes.func.isRequired,
	isOpen: React.PropTypes.bool.isRequired,
	isHeader: React.PropTypes.bool.isRequired
}

const defaultProps = {
	val: 'val',
	ind: 7,
	settingsObj: {}, // verify this one
	valueUserInputHandler: () => {},
	isCollapsed: true,
	isOpen: true,
	isHeader: true
}

const contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

export default class ThemePropItemInput extends React.Component {
	constructor(props, ...args) {
		super(props, ...args);

		this.onToolToggle = this.onToolToggle.bind(this);
		this.renderProp   = this.renderProp.bind(this);
	}


	shouldComponentUpdate(nextProp) {
		return true;
		console.log('Component Updated');
	}

	onToolToggle() {
		this.props.onCollapsed(!this.props.isCollapsed);
	}
	
	renderProp(isNotHeader){
		// const { palette } = this.context.muiTheme;
		const { ind, val, valueUserInputHandler, isCollapsed, isOpen, onSelect } = this.props;
		const settingsObj = this.props.settingsObj || { isNotHeader };
		const onToolTogle = this.onToolTogle;
		const styleHR = { borderBottom: `solid black 1px` }; // need to change to palette

		return (
			<div>
				<PropItem
			  	{...{ ind, val, settingsObj, valueUserInputHandler, isNotHeader, onToolTogle, isOpen, onSelect }}
				/>

				 {/*<PropToolPicker
				  {...{ isCollapsed, onToolTogle }}
				  settingsObj={isNotHeader ? settingsObj[val] : ''}
				  valueHandler={valueHandler(val)}
				/> */}
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.renderProp(!this.props.isHeader)}
			</div>
		)
	}
}

ThemePropItemInput.propTypes = propTypes;
ThemePropItemInput.defaultProps = defaultProps;
ThemePropItemInput.contextTypes = contextTypes;


function PropItem(props, context) {
	// const { palette } = context.muiTheme;
	const { settingsObj, val, ind, valueUserInputHandler, isOpen, isNotHeader, value } = props;
	const color = typeof(settingsObj[val]) === 'string' ? settingsObj[val] : '';
	const onSelect = () => {
	    const select = {
	        selectedProp: val,
	        selectedVal: `'${settingsObj[val]}'`,
	    }
	    props.onSelect(select);
	}
	return (
		<div>

			<PropUserInput
					valueUserInputHandler={valueUserInputHandler}
					settingsObj={settingsObj[val] || ''}
					isNotHeader={isNotHeader}
				/> 

				{/* <PropTool
					color={color}
					onTool={props.onToolToggle}
					isNotHeader={isNotHeader}
				/> */}
				{/*<div style={{ height: isOpen ? 1 : 0, overflow: 'hidden' }}>
					<div style={styleHR} />
				</div> */}
		</div>
	)
}

PropItem.propTypes = {
    settingsObj: React.PropTypes.object.isRequired,
    val: React.PropTypes.string.isRequired,
    ind: React.PropTypes.number.isRequired,
    onToolTogle: React.PropTypes.func.isRequired,
    valueUserInputHandler: React.PropTypes.func.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    isNotHeader: React.PropTypes.bool.isRequired,
};
PropItem.contextTypes = contextTypes;


function PropUserInput(props, context) {
	const { valueUserInputHandler, settingsObj, isNotHeader } = props;
	const isInt = (settingsObj === parseInt(settingsObj, 10));
	const strStyle = {
	    width: isInt ? 40 : 'auto',
	    textAlign: isInt ? 'right' : 'left'
	};
	const inputStyle = {
		border: 'none',
		fontStyle: 'italic',
		placeholder: 'italic',
		padding: 2,
		// backgroundColor: palette.canvasColor,
		// color: palette.primary2Color,
		...strStyle
	}

	return (
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
			<input	
		 		type="text"
		 		onChange={valueUserInputHandler}
		 		title={settingsObj}
		 		placeholder="New Prop Name"
		 		style={{inputStyle}}
		 		/>
			<input
		 		type="text"
		 		// value={this.props.newPropItemVal}
		 		onChange={valueUserInputHandler}
		 		title={settingsObj}
		 		placeholder="New Prop Value"
		 		style={{inputStyle}}
		 		/>
 			<input	
 		 		type="submit"
 		 		style={{inputStyle}}
 		 		/>		 					
		</div>
	)
}

PropUserInput.propTypes = {
    settingsObj: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    valueUserInputHandlerr: React.PropTypes.func
    // isNotHeader: React.PropTypes.bool.isRequired,
};
PropUserInput.contextTypes = contextTypes;