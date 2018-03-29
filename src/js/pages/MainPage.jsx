import React from 'react';

import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

export default class Layout extends React.Component {
	componentDidMount() {
		document.title = "Basic React Training";
	}

	render() {
		return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}