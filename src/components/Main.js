import React, {Component} from 'react';


export default class Main extends Component {
    render(){
        return(
        <div>
            <p className="App-intro">
                Hello, {this.props.name} <br/>
                Do you want to see the secret area? <a href ="/secret">Click here</a>  <br/>
                {/* Checks Just In Case You want to check Authentication Logic is working. */}
                {/* {this.props.auth.isAuthenticated() ? ("Yes"): ("No")}<br/> */}
                {/* {JSON.stringify(localStorage.getItem("expires_at"))}<br/>
                {new Date().getTime()}<br/>
                {new Date().getTime() - JSON.parse(localStorage.getItem("expires_at"))}<br/> */}
            </p>
            {!this.props.auth.isAuthenticated() &&
            <div>
                <hr/>
                Please login first
                <hr/>
                <button onClick={this.props.auth.login} >Login</button>
                
            </div>
            }
        </div>
        )

    }
}

