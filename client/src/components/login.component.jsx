import React, {useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import { withRouter } from '../common/with-router';
import {connect} from "react-redux";
import {setUser} from "../actions";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    let form = null;
    let checkBtn = null;

    const onChangeUsername = e => { setUsername(e.target.value); }
    const onChangePassword = e => { setPassword(e.target.value); }
    const handleLogin = e => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        form.validateAll();

        if (checkBtn.context._errors.length === 0) {
            AuthService.login(username, password)
                .then(() => {
                    const user = AuthService.getCurrentUser();
                    props.setUser(user);
                    props.router.navigate("/profile");
                },
                error => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setMessage(resMessage);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }

    return (
        <div className="form-login">
            <div className="form-header">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card" />
            </div>

            <Form
                onSubmit={handleLogin}
                ref={c => {form = c}}
                className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                        type="text"
                        className="form-control form-control-xl"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control form-control-xl"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]} />
                </div>

                <div className="form-group">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                </div>

                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}

                <CheckButton
                    style={{display: "none"}}
                    ref={c => {checkBtn = c}} />
            </Form>
        </div>
    );
}

export default withRouter(connect(null, {setUser})(Login));