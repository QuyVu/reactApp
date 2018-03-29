import React from "react";
import Clock from 'react-live-clock';

export default class Layout extends React.Component {
	componentDidMount() {
		document.title = "Basic React Training";
	}

	render() {
		return (
			<div>
				<div>
					<h1>Time: <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} /></h1>
				</div>
				<div>
					<div id="feedback"></div>
				</div>
			</div>
		);
	}
}