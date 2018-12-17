import React, { Component } from 'react';
import CategoryOption from './CategoryOption';
import MediaCard from './MediaCard';

class CategoryPane extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mediaSelection: 0
		};
	}

	changeMedia(n){
		this.setState({mediaSelection: n});
	}

	render(){
		return (
			<div className="card border-primary grid-container">
				<div>
					{
						this.props.dataObject.map((object, i) => {
							return (
								<div key={i}>
									<CategoryOption dataObject={object} onClick={() => this.changeMedia(i)} currentlySelected={this.state.mediaSelection} selectionNumber={i}/>
								</div>
							)
						})
					}
				</div>
				<div>
					<MediaCard dataObject={this.props.dataObject[this.state.mediaSelection]}/>
				</div>
			</div>
		)
	}
}

export default CategoryPane;
