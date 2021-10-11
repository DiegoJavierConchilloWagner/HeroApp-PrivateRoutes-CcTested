// import React from "react";
// import { mount, shallow, configure } from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { authReducer } from "../../auth/authReducer";

describe('Pruebas en authReducer', () => {

    const types = {
        login:  '[auth] login',
        logout: '[auth] logout'
    };

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer( { logged: false }, {} );
        
        expect( state ).toEqual( { logged: false } )
    });
    
    test('Debe de autenticar y colocar el name del usuario', () => {
        const state = authReducer( { logged: false }, {
            type: types.login,
            payload: { name: 'Diego Wagner' }
        });
        
        expect( state ).toEqual( { logged: true, name: 'Diego Wagner' });
    });
    
    test('Debe de borrar el name del usuario y el logged en false', () => {
        const state = authReducer( { logged: true, name: 'Diego Wagner' }, {
            type: types.logout
        });
        
        expect( state ).toEqual( { logged: false });
    });
    
});
