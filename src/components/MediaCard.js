import React, { Component } from 'react';

class MediaCard extends Component {
	renderPregenre(){
		if (this.props.dataObject.fiction !== undefined){
			return (this.props.dataObject.fiction ? "Fiction" : "Non-fiction") + " | ";
		}
		return;
	}
	renderAttribution(){
		if (this.props.dataObject.author){
			return this.props.dataObject.author;
		}
		if (this.props.dataObject.artist){
			return this.props.dataObject.artist;
		}
	}
	render(){
		return (
			<div className="card border-primary">
				<h2>
					<span className="text-primary">{this.props.dataObject.title}</span>
					<span> by { this.renderAttribution() }</span>
				</h2>
				<p>{this.renderPregenre()}{this.props.dataObject.genre}</p>
				<hr />
				<p>
					{this.props.dataObject.description}
				</p>
			</div>
		)
	}
}

export default MediaCard;
