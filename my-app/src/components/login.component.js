import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
        }

        this.buttonDisabled = true;
        this.errormsg = "";

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState(
            {[event.target.name] : event.target.value}
        );

    }

    handleSubmit(event) {
        // alert('A email was submitted: ' + this.state.email + "\npassword = " + this.state.password);
        // alert('A email was submitted: ' + this.state);
        var email = this.state.email;
        var password = this.state.password;

            //blockage du bruteforce 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password})
        };
        console.log(requestOptions)
        fetch('http://localhost:3001/api/auth/signin', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });

            //redirection

        event.preventDefault();
    } 

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} method="post">
                    <h2>Register</h2>


                    <div className="form-group">
                        <label>Email
                            <input name="email" value={this.state.email}  onChange={this.handleChange} type="text" className="form-control" placeholder="Enter email" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Password    
                            <input name="password" value={this.state.password}  onChange={this.handleChange} type="password" className="form-control" placeholder="Enter password" />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" id="submit_button">login</button>
                </form>

                <p className="forgot-password text-right">
                    Not registered yet ? <a href="/register"> Register?</a>
                </p>
                
            </div>
        );
    }
}