import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { LoginScreen } from '../../components/login/LoginScreen';
import { AuthContext } from '../../auth/AuthContext';


describe('Pruebas en LoginScreen', () => {
    
    const history = {
        replace: jest.fn()
    };
    const contextValue={
        dispatch: jest.fn(),
        user: { logged: false }
    }  

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    )

    test('Debe de mosrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    // test('Debe de realizar el dispatch y la navegación', () => {
    //     wrapper.find('button').prop('onClick')();

    //     // expect( contextValue.dispatch ).toHaveBeenCalledWith({type: types.login,
            // payload:{
            //     name: 'Diego Wagner',
            //     email: 'Diegoo.javier.wagner@gmail.com'
            // }})
    // });
});
