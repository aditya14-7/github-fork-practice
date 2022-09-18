import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import search from './components/search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
class App extends Component {
  
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const response = await axios.get('https://api.github.com/users')
    this.setState({
      loading: false,
      users: response.data
    })
  }
  render() {

    return (
      <div className='App'>
      <Navbar title='Git Finder' icon='fab fa-github' />
      <Users userData={this.state.users} loading={this.state.loading} />
      <div className='container'>
        <Search />
        <Users userData={this.state.users} loading={this.state.loading} />
      </div>
    </div>
    )
}
export default App ;