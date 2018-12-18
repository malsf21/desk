import React, { Component } from 'react';
import SelectionOption from './SelectionOption';
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
			<div>
				<div className="text-center">
					{
						this.props.dataObject.map((object, i) => {
							// use a span here so we can force a space
							return (
								<span key={i}>
									<SelectionOption
										dataObject={object}
										onClick={() => this.changeMedia(i)}
										currentlySelected={this.state.mediaSelection}
										SelectionId={i}
									/>
									&nbsp;
								</span>
							)
						})
					}
				</div>
				<div>
					<MediaCard
						dataObject={ // this is a bit complex, but it just checks if the index exists - and defaults to 0 if needed
							this.props.dataObject[this.state.mediaSelection] !== undefined ? this.props.dataObject[this.state.mediaSelection] : this.props.dataObject[0]
						}
					/>
				</div>
			</div>
		)
	}
}

export default CategoryPane;
