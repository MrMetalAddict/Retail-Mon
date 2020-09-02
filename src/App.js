import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-component/searchbox-component'

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      monsters : [
      ],
      searchfield : ''
    }
  }
  handleChange = (e) => {
    this.setState({ searchfield: e.target.value })};
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monsters : users}));
  } 
  render()
  {
    const { monsters , searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}

export default App;
