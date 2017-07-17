import React, { Component } from 'react';
import { Chip, TextField, DropDownMenu, MenuItem } from 'material-ui';
import AutoComplete from 'material-ui/AutoComplete';

const extraToppings = ['Mushrooms', 'Pepperoni', 'Beef', 'Chicken', 'Jalapenos',
'Pineapple', 'Feta Cheese', 'Spinach', 'Red Pepper', 'Olive', 'Onion', 'Green Pepper']

export default class PizzaOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      toppings: [
        {label: 'Cheese'},
        {label: 'Tomato Sauce'}
      ],
      size: ''
    }
    this.renderChip = this.renderChip.bind(this);
    this.addToppings = this.addToppings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handelRequestDelete = this.handelRequestDelete.bind(this);
  }
  handleChange(event, index, value){
    this.setState({
      size: value
    })
  }
  handelRequestDelete = (data) => {
    this.chipData = this.state.toppings;
    this.chipData.filter(chip => chip.label === data.label ? '' : chip )
    this.setState({
      toppings: this.chipData
    })
  }
  addToppings (value, index){
    let newTop = { label: value }
    let toppings = this.state.toppings.append(newTop);
    this.setState({ toppings });
  }
  renderChip(data, index){
    return(
      <Chip
        key={index}
        onRequestDelete={() => this.handleRequestDelete.bind(null, data)}
        >
        {data.label}
      </Chip>
    )
  }
  render(){
    return(
      <div>
        <TextField
          floatingLabelText="Name"
          floatingLabelFixed={true}
        />
        <TextField
          floatingLabelText="Phone Number"
          floatingLabelFixed={true}
        />
        <DropDownMenu value={this.state.size} onChange={this.handleChange}>
            <MenuItem value="Small" primaryText="Small" />
            <MenuItem value="Medium" primaryText="Medium" />
            <MenuItem value="Large" primaryText="Large" />
            <MenuItem value="XL" primaryText="Extra Large" />
        </DropDownMenu>
        <AutoComplete
          floatingLabelText="More Toppings"
          filter={Autocomplete.fuzzyFilter}
          dataSource={extraToppings}
          maxSearchResults={5}
          onNewRequest={this.addToppings}
          />
        <div>
          {this.state.toppings.map(this.renderChip, this)}
        </div>
      </div>
    )
  }
}
