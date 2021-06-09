import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			zombies: []
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ zombies: users }))

	}

	render() {
		return (
			<div className="App">{this.state.zombies.map((zombie) => <h1 key={zombie.id}> {zombie.name} </h1>)}</div>
		);
	}
}

export default App;
