import React from 'react';

import Header from './Body/Header.jsx';
import Body from './Body/Body.jsx';
import Footer from './Body/Footer.jsx';

export default class Layout extends React.Component {
	componentDidMount() {
		document.title = "Basic React Training";
	}

	render() {
		return (
			<div>
			Now it's work
			</div>
		);
	}
}