import React from 'react';

import Body from './components/Body.jsx';

export default class MainPage extends React.Component {
	componentDidMount() {
		document.title = "Basic React Training";
	}

	render() {
		return (
			<Body />
		);
	}
}