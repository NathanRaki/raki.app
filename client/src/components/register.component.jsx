import React, {useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const verifyUsername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const verifyPassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export default function Register () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    let form = null;
    let checkBtn = null;

    const onChangeUsername = e => { setUsername(e.target.value); };
    const onChangePassword = e => { setPassword(e.target.value); };
    const handleRegister = e => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);

        form.validateAll();

        if (checkBtn.context._errors.length === 0) {
            AuthService.register(username, password)
                .then(response => {
                        setMessage(response.data.message);
                        setSuccessful(true);
                    },
                    error => {
                        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                        setMessage(resMessage);
                        setSuccessful(false);
                    });
        }
    };

    return (
        <div className="form-register">
            <div className="form-header">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"/>
            </div>

            <Form
                onSubmit={handleRegister}
                ref={c => {form = c}}
                className="form">
                {!successful && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, verifyUsername]} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, verifyPassword]} />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Sign up</button>
                        </div>
                    </div>
                )}

                {message && (
                    <div className="form-group">
                        <div
                            className={successful ? "alert alert-success" : "alert alert-danger"}
                            role="alert">
                            {message}
                        </div>
                    </div>
                )}

                <CheckButton style={{display: "none"}} ref={c => {checkBtn = c}} />
            </Form>
        </div>
    );
}