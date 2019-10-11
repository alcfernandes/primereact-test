import React, { Component } from 'react';
import {Button} from 'primereact/button';
import {AutoComplete} from 'primereact/autocomplete';
import {BuscaContratosForm} from './Components/BuscaContratosForm'
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {count: 0, brandSuggestions: null};
        this.increment = this.increment.bind(this);
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    }
    
    suggestBrands(event) {
      let results = this.brands.filter((brand) => {
           return brand.toLowerCase().startsWith(event.query.toLowerCase());
      });
      
      this.setState({ brandSuggestions: results });
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }
    
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to PrimeReact</h2>
            </div>
            <div className="App-intro">
              <Button label="Click" icon="pi pi-check" onClick={this.increment} />
              
              <p>Number of Clicks: {this.state.count}</p>
            </div>
            <AutoComplete value={this.state.brand} onChange={(e) => this.setState({brand: e.value})}
                    suggestions={this.state.brandSuggestions} completeMethod={this.suggestBrands.bind(this)} />
            <h1>Meu teste</h1>
            <BuscaContratosForm/>
          </div>
        );
    }
}

export default App;
