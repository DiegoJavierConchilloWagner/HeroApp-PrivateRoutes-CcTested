import React from "react";
import { mount, shallow, configure } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe('Pruebas en AppRouter', () => {
    const contextValue={
        dispatch: jest.fn(),
        user: { logged: false }
    }    

    test('Debe mostrar el login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }> 
                <AppRouter />
            </AuthContext.Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar el componente de marvel si esta autenticado', () => {
        const contextValue={
            dispatch: jest.fn(),
            user: { logged: true, name: 'Diego' }
        }    
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }> 
                <AppRouter />
            </AuthContext.Provider>
        );
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists() ).toBe( true );

    });
    
});
