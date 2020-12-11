import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// Importing actions/required methods
import { updateLoginForm, login } from "../../actions/user";
import './index.css';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/login");
    }


    render() {
        const { app } = this.props

        /*
            This is where we pack the info needed fo login
            login(this, app) will call /users/login POST api call with body of
            {
                email: email,
                password: password,
            }
        */

        return (
            <div className="login__bg-image center">
                <div className="login__card center"
                    display="flex"
                 >
                    <h2>Log in</h2>

                    <TextField
                        required
                        name="email"
                        label="Email"
                        pattern="/^\S+@\S+\.\S+$/"
                        minLength={5}
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <TextField
                        required
                        name="password"
                        label="Password"
                        type="password"
                        minLength={5}
                        className="login__input app__input app__horizontal-center"
                        margin="normal"
                        onChange={e => updateLoginForm(this, e.target)}
                    />

                    <Button
                        className="login__button app__horizontal-center"
                        onClick={() => login(this, app)}
                    >
                        Log In
                    </Button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
