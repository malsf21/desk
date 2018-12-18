import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

class MediaButtons extends Component {
	render(){
		return(
			<div className="text-center">
				{
					this.props.dataObject.amazon ?
					<a className="button button-primary" href={this.props.dataObject.amazon}>
						<FontAwesomeIcon icon={faAmazon}/>
					</a> : ""
				}
				{
					this.props.dataObject.spotify ?
					<a className="button button-primary" href={this.props.dataObject.spotify}>
						<FontAwesomeIcon icon={faSpotify}/>
					</a> : ""
				}
				{
					this.props.dataObject.wikipedia ?
					<a className="button button-primary" href={this.props.dataObject.wikipedia}>
						<FontAwesomeIcon icon={faWikipediaW}/>
					</a> : ""
				}
			</div>
		)
	}
}

export default MediaButtons;
