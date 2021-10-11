import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { Navbar } from "../../components/ui/Navbar";
import { MemoryRouter, Router } from "react-router";

describe('Pruebas en Navbar', () => {
    
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    };

    const contextValue={
        dispatch: jest.fn(),
        user: { logged: true, name: 'Diego' }
    }    

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar /> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    afterEach(() => {
        jest.clearAllMocks();
    })

    const types = {
        login:  '[auth] login',
        logout: '[auth] logout'
    }

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text() ).toBe( 'Diego' );
    });
    

    test('Debe de llamar el logOut y usar el history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({type: types.logout})
        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    });
    
});
