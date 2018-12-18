import React, { Component } from 'react';

class SelectionOption extends Component {
	render(){
		return(
			<button
			className={
				this.props.currentlySelected === this.props.SelectionId ?
				"tag bg-primary border-primary":"tag button-primary"
			}
			onClick={() => this.props.onClick()}
			>
				{this.props.dataObject.title}
			</button>
		)
	}
}

export default SelectionOption;
