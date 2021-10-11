import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    
    const { location:{ pathname, search } } = rest;
    // console.log( pathname, search )
    const lastPath = search ? pathname + search : pathname;
    // console.log( lastPath )
    localStorage.setItem( 'lastPath', lastPath );
    
    return (
        <Route {...rest} 
            component={ (props) =>(
                ( isAuthenticated) ?
                    <Component { ...props } /> :
                    <Redirect to="/login" />
            )}/>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}