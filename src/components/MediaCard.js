import React, { Component } from 'react';
import MediaButtons from './MediaButtons';
import MediaMetadata from './MediaMetadata';

class MediaCard extends Component {
	renderAttribution(){
		if (this.props.dataObject.author){
			return this.props.dataObject.author;
		}
		if (this.props.dataObject.artist){
			return this.props.dataObject.artist;
		}
	}
	renderImage(){
		if (this.props.dataObject.imgUrl !== undefined){
			return (<img className="img-responsive" src={this.props.dataObject.imgUrl} alt={this.props.dataObject.title}/>)
		}
		return;
	}
	render(){
		return (
			<div className="card border-primary">
				{this.renderImage()}
				<h2>
					<span className="text-primary">{this.props.dataObject.title}</span>
					<span> by { this.renderAttribution() }</span>
				</h2>
				<MediaMetadata dataObject={this.props.dataObject} />
				<hr />
				<p>
					{this.props.dataObject.description}
				</p>
				<hr className="border-primary" />
				<MediaButtons dataObject={this.props.dataObject} />
			</div>
		)
	}
}

export default MediaCard;
