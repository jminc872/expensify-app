import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';

export const PublicRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)

// create publicroute
// redirect to /dashboard if logged in
// render component if not logged in
// use it for the loginpage