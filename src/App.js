import React ,{ Component }from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {updateUser} from './actions/user-actions'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }
  onUpdateUser(event)
  {
    console.log("On clicked")       
    this.props.onUpdateUser(event.target.value)   //Calls user-actions and passes the name as a parameter
  }
  render()
  {
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
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state =>({
  products : state.products,
  user : state.users
}) 

const mapDispatchToProps = {
  onUpdateUser :updateUser
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
