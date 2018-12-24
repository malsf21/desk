import React, { Component } from 'react';
import getAverageColor from 'get-average-color';

class MediaImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxShadowString: "3px 3px 0 #E95420, 6px 6px 0 #E95420, 9px 9px 0 #E95420, 12px 12px 0 #E95420"
		};
	}
	componentToHex(c) {
		// shamelessly ripped from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
		var hex = c.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	}
	convertRgbToHex(rgb){
		var r = rgb.r;
		var g = rgb.g;
		var b = rgb.b;
		return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
	}
	render(){
		if (this.props.dataObject.imgUrl !== undefined){
			getAverageColor(this.props.dataObject.imgUrl).then(
				rgb => {
					var hex = this.convertRgbToHex(rgb);
					console.log(hex)
					this.setState({boxShadowString: "3px 3px 0 " + hex + ", 6px 6px 0 " + hex + ", 9px 9px 0 " + hex + ", 12px 12px 0 " + hex});
				}
			)
			return (
				<img
					className="img-responsive img-stacked"
					src={this.props.dataObject.imgUrl}
					style={{boxShadow: this.state.boxShadowString}}
					alt={this.props.dataObject.title}
				/>
			)
		}
		else{
			return <div></div>;
		}
	}
}

export default MediaImage;
