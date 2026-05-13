import React, { Component } from "react";

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return (
            <div>
              {/* {this.state.isLoggedIn ? (
                    <div>Welcome NANI</div>
                ) : (
                    <div>Welcome Guest</div>
                )} */}
                 {this.state.isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}

                <button onClick={() => this.setState({ isLoggedIn: !this.state.isLoggedIn })}>
                    {this.state.isLoggedIn ? "Logout" : "Login"}
                </button>
            </div>
        )
    }
}

export default ConditionalRendering;