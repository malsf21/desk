import React, { Component } from 'react';

class CategoryOption extends Component {
	render(){
		if (this.props.currentlySelected == this.props.selectionNumber){
			return (
				<div className="tag bg-primary" onClick={() => this.props.onClick()}>
					{this.props.dataObject.title}
				</div>
			)
		}
		else{
			return (
				<div className="tag border-primary" onClick={() => this.props.onClick()}>
					{this.props.dataObject.title}
				</div>
			)
		}
	}
}

export default CategoryOption;
