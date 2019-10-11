import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export class BuscaContratosForm extends Component {
    constructor() {
        super();
        this.state = {
            city: null
        };
        this.citySelectItems = [
            {label: 'New York', value: 'NY'},
            {label: 'Rome', value: 'RM'},
            {label: 'London', value: 'LDN'},
            {label: 'Istanbul', value: 'IST'},
            {label: 'Paris', value: 'PRS'}
        ];
      }
      
      render() {
        return (
          <div>
            <h1>Teste</h1>
            <Dropdown value={this.state.city} options={this.citySelectItems} onChange={(e) => {this.setState({city: e.value})}} placeholder="Select a City"/>
          </div>
        );
      }    
}

export default BuscaContratosForm;

