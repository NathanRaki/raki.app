import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import {withRouter} from "../common/with-router";
import {connect, useSelector} from "react-redux";
import {setUser} from "../actions";
import {store} from "../App";

function Profile(props) {
    const [redirect, setRedirect] = useState(null);
    const currentUser = useSelector(() => store.getState().user.currentUser);

    // componentDidMount
    useEffect(() => {
        if (!currentUser) setRedirect("/");
    }, []);

    function logOut() {
        AuthService.logout();
        props.setUser(null);
        props.router.navigate("/");
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className="container">
            {!store.getState().user.isLoading ? (
                <div>
                    <header className="jumbotron">
                        <h3>
                            <strong>{currentUser.username}</strong> Profile
                        </h3>
                    </header>
                    <p>
                        <strong>Token:</strong>{" "}
                        {currentUser.accessToken.substring(0,20)} ...{" "}
                        {currentUser.accessToken.substring(currentUser.accessToken.length - 20)}
                    </p>
                    <p>
                        <strong>Id:</strong>{" "}
                        {currentUser.id}
                    </p>
                    <strong>Authorities: </strong>
                    <ul>
                        {currentUser.roles &&
                            currentUser.roles.map(role => <li key={role}>{role}</li>)}
                    </ul>
                    <button className="btn btn-primary" onClick={logOut}>Logout</button>
                </div>
            ) : null}
        </div>
    );
}

export default withRouter(connect(null, {setUser})(Profile));