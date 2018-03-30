import React from "react";
import Clock from 'react-live-clock';

import Header from './Header.jsx'
import Footer from './Footer.jsx';

export default class Body extends React.Component {
	constructor() {
    	super();
    	this.state = {header: "Welcome",};
    }

    handleChange(e) {
    	this.setState({header: e.target.value});
    }

	render() {
		return (
			<div>
				<Header header={this.state.header} />
				<input onChange={this.handleChange.bind(this)} />
				<div>
					<h1>Time: <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} /></h1>
				</div>
				<Footer />
			</div>
		);
	}
}