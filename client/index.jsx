const React = require('react');
const ReactDOM = require('react-dom');
const TestComponent = require('./components/TestComponent.jsx');

ReactDOM.render(
	<TestComponent/>,
	document.getElementById("react-container")
);