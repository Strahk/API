import React from 'react';
import './App.css';
import SimpsonQuote from './components/SimpsonQuote'
// import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';

// Expemple quête

// const sampleEmployee = {
//   gender: 'male',
//   name: {
//     first: 'Charlie',
//     last: 'Thompson',
//   },
//   location: {
//     street: {
//       number: 761,
//       name: 'Tay Street',
//     },
//     city: 'Timaru',
//     postcode: 76111,
//   },
//   email: 'charlie.thompson@example.com',
//   picture: {
//     medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
//   },
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employee: sampleEmployee
//     };
//     this.getEmployee = this.getEmployee.bind(this);
//   }

// getEmployee() {
//   // Send the request
//   axios.get('https://randomuser.me/api?nat=fr')
//     // Extract the DATA from the received response
//     .then(response => response.data)
//     // Use this data to update the state
//     .then(data => {
//       console.log(data)
//       this.setState({
//         employee: data.results[0],
//       });
//     });
// }

//   render() {
//     return (
//       <div className="App">
//         <DisplayEmployee employee={sampleEmployee} />
//         <button type="button" onClick={this.getEmployee}>
//           Get employee
//       </button>
//       </div>
//     )
//   }
// }

// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: true
    }
    this.getCharacter = this.getCharacter.bind(this);
  }

  componentDidMount() {
    this.getCharacter();
  }

  getCharacter() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <SimpsonQuote simpson={this.state.simpson} />
        <button type="button" onClick={this.getCharacter}>New Quote</button>
      </div>
    )
  }
}

export default App;