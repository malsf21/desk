import React, { Component } from 'react';

class MediaMetadata extends Component {
	renderFiction(){
		if (this.props.dataObject.fiction !== undefined){
			return <span className="tag tag-rounded border-primary">
				{this.props.dataObject.fiction ? "Fiction" : "Non-fiction"}
				</span>
		}
		return;
	}
	render(){
		return (
			<p>
				{
					this.renderFiction()
				}
				&nbsp;
				<span className="tag tag-rounded border-primary">{this.props.dataObject.genre}</span>
				&nbsp;
				<span className="tag tag-rounded border-primary">{this.props.dataObject.year}</span>
			</p>
		)
	}
}

export default MediaMetadata;
