import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';

// Importing actions/required methods
import { updateLoginForm, signup } from "../../actions/user";
import './index.css';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/signup");
    }

    render() {
        const { app } = this.props
        /*
            This is where we pack the info needed fo signup
            signup(this, app) will call /api/user POST api call with body of
            {
                name: name,
                occupation: occupation,
                email: email,
                password: password,
            }
        */

        return (
            <div className="login__bg-image center">
                <div className="login__card center"
                    display="flex"
                >
                    <h2>Sign Up</h2>
                    <TextField
                        required
                        name="name"
                        label="Name"
                        pattern="/S+@/"
                        minLength={2}
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <TextField
                        required
                        name="occupation"
                        label="Occupation"
                        type="string"
                        minLength={5}
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <TextField
                        required
                        name="email"
                        label="Email"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <TextField
                        required
                        name="password"
                        label="Password"
                        type="password"
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />
                    <Link to='/login'>
                        <Button
                            className="login__button app__horizontal-center"
                            onClick={() => signup(this, app)}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Signup;
