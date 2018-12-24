import React, { Component } from 'react';
import MediaButtons from './MediaButtons';
import MediaImage from './MediaImage';
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
			return (<img className="img-responsive img-stacked" src={this.props.dataObject.imgUrl} alt={this.props.dataObject.title}/>)
		}
		return;
	}
	render(){
		return (
			<div className="card border-primary">
				<MediaImage dataObject={this.props.dataObject} />
				<div className="text-center">
					<h2>
						<span className="text-primary">{this.props.dataObject.title}</span>
						<span> by { this.renderAttribution() }</span>
					</h2>
					<MediaMetadata dataObject={this.props.dataObject} />
				</div>
				<p>
					{this.props.dataObject.description}
				</p>
				<MediaButtons dataObject={this.props.dataObject} />
			</div>
		)
	}
}

export default MediaCard;
