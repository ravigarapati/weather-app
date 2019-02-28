import React from 'react';

class Test extends React.Component {
  state = {
      city: null,
      country: null,
      employees: [
        {id: 1, name: "GOpal"},
        {id: 2, name: "Ravi"}
      ]
  }

  cityHandler = (event) => {
    // console.log(event.target.value);
    this.setState({
      city: event.target.value
    })
  }

  countryHandler = (event) => {
    // console.log(event.target.value);
    this.setState({
      country: event.target.value
    })
  }

  // mandatory method
  render() {
  // js
    if (this.state.city) {
      console.log("city ", this.state.city);
    }

    if (this.state.country) {
      console.log("country: ", this.state.country);
    }

    return (
      <div>
        City: <input type='text' placeholder='City' onChange={this.cityHandler}/><br />
        Country: <input type='text' placeholder='Country' onChange={this.countryHandler} />
      </div>
    )
  }
}

export default Test;


export const MyArrowFun = () => <div>arrow fun</div>
