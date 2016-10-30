import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  radioButton: {
    width: '40%',
  },
  datePicker: {
    width: '90%',
  },
  label: {
/** note: need to use context.palette.secondaryTextColor
 *    color: 'black'
*/
  },
  textField: {
    width: '160%',
  },
  selectField: {
    width: '30%',
    marginRight: '20px'
  }
}

const adultNum = [];
for (let i = 1; i < 7; i++ ) {
  adultNum.push(<MenuItem value={i} key={i} primaryText={i} />);
}

const childNum = [];
for (let i = 0; i < 7; i++ ) {
  childNum.push(<MenuItem value={i} key={i} primaryText={i} />);
}

export default class MaterialAirlineBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flightType: 'return',
            adultNum: 1,
            childNum: 0,
            infantNum: 0,
            dataSource: ["Ahmedabad",
                         "Ankara",
                         "Atlanta",
                         "Bangalore",
                         "Bangkok",
                         "Barcelona",
                         "Beijing",
                         "Belo Horizonte",
                         "Berlin",
                         "Bogotá",
                         "Boston",
                         "Buenos Aires",
                         "Changzhou",
                         "Chengdu",
                         "Chennai",
                         "Chicago",
                         "Chongqing",
			 "Colombo",
                         "Dallas–FortWorth",
                         "Delhi",
                         "Detroit",
                         "Dhaka",
                         "Guadalajara",
                         "Guangzhou",
                         "Hamburg",
                         "Hangzhou",
                         "Harbin",
                         "Hong Kong",
                         "Houston",
                         "Hyderabad",
                         "Inland Empire",
                         "Istanbul",
                         "Jakarta",
                         "Jinan",
                         "Karachi",
                         "Kolkata",
                         "Lagos",
                         "Lima",
                         "London",
                         "Los Angeles",
                         "Luanda",
                         "Madrid",
                         "Manila",
                         "Melbourne",
                         "Mexico City",
                         "Miami",
                         "Milan",
                         "Monterrey",
                         "Mumbai",
                         "Munich",
                         "Nagoya",
                         "Nanchang",
                         "Nanjing",
                         "New York City",
			 "Nice",
                         "Osaka",
                         "Paris",
                         "Philadelphia",
                         "Phoenix",
                         "Pune",
                         "Qingdao",
                         "Rhine-Ruhr",
                         "Rio de Janeiro",
                         "Rome",
                         "San Francisco",
                         "Santiago",
                         "Seoul",
                         "Shanghai",
                         "Shantou",
                         "Shenyang",
                         "Shenzhen",
                         "Singapore",
                         "Stuttgart",
                         "Surat",
                         "Sydney",
                         "São Paulo",
                         "Taipei",
                         "Tehran",
                         "Tianjin",
                         "Tokyo",
                         "Toronto",
			 "Vancouver",
                         "Washington D.C.",
                         "Wenzhou",
                         "Wuhan",
                         "Xi'an",
                         "Zhengzhou"
                        ]
        };
    }

    handleChildChange(event, index, value) {
      this.setState({childNum: value});
    }

    handleAdultChange(event, index, value) {
      this.setState({adultNum: value});
    }

    handleInfantChange(event, index, value) {
      this.setState({infantNum: value});
    }

    handleFlightType(event, value) {
      this.setState({flightType: value});
    }


    render() {
      let returnDate;
      if(this.state.flightType === 'return') {
        returnDate = (<DatePicker hintText="Return" autoOk={true} container="inline" mode="landscape"
            floatingLabelText="Return date:"
            floatingLabelFixed={true}
            floatingLabelStyle={styles.label}
            textFieldStyle={styles.datePicker}
          />);
        } else {
          returnDate = "";
        }

      return (
        <div
          style={{
              margin: '20px 100px',
              minWidth: 400,
              maxWidth: 450,
          }}
        >
          <Card style={{ width: '100%' }} >
            <CardHeader
              title="Airline booking component"
              subtitle="#first but not least"
            />
            <CardText>
              <RadioButtonGroup name="flightType" style={{display: 'flex', justifyContent:'space-between'}} defaultSelected="return" onChange={this.handleFlightType.bind(this)}>
                <RadioButton
                  value="return"
                  label="Return"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="oneWay"
                  label="One way"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
              <AutoComplete
                hintText="E.g London"
                floatingLabelText="From"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.label}
                textFieldStyle={styles.textField}
                dataSource={this.state.dataSource}
                filter={AutoComplete.caseInsensitiveFilter}
                maxResults={6}
              /><br/>
              <AutoComplete
                hintText="E.g Sydney"
                dataSource={this.state.dataSource}
                filter={AutoComplete.caseInsensitiveFilter}
                floatingLabelText="To"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.label}
                textFieldStyle={styles.textField}
                maxResults={6}
              />
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <DatePicker hintText="Departure" autoOk={true} container="inline" mode="landscape"
                  floatingLabelText="Departure date:"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.label}
                  textFieldStyle={styles.datePicker}
                />
                { returnDate }
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <SelectField
                  value={this.state.adultNum}
                  onChange={this.handleAdultChange.bind(this)}
                  style={styles.selectField}
                  floatingLabelText="Adult"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.label}
                >
                  {adultNum}
                </SelectField>
                <SelectField
                  value={this.state.childNum}
                  onChange={this.handleChildChange.bind(this)}
                  style={styles.selectField}
                  floatingLabelText="Child"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.label}
                >
                  {childNum}
                </SelectField>
                <SelectField
                  value={this.state.infantNum}
                  onChange={this.handleInfantChange.bind(this)}
                  style={styles.selectField}
                  floatingLabelText="Infant"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.label}
                >
                  <MenuItem value={0} primaryText="0" />
                  <MenuItem value={1} primaryText="1" />
                </SelectField>
              </div>
              <div style={{justifyContent: 'center', display: 'flex'}}>
                <RaisedButton label="Search.." primary={true} style={{margin: '20px'}} />
              </div>
            </CardText>
          </Card>
        </div>
      );
    }
}

MaterialAirlineBooking.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
