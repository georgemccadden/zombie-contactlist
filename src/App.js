import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			zombies: [
				{
					name: 'Randy',
					id: 'ran'
				},
				{
					name: 'Simeon',
					id: 'sim'
				},
				{
					name: 'Rasputin',
					id: 'ras'
				}
			]
		};
	}
	render() {
		return (
			<div className="App">{this.state.zombies.map((zombie) => <h1 key={zombie.id}> {zombie.name} </h1>)}</div>
		);
	}
}

export default App;
