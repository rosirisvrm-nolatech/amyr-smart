import { Auth } from '../../types';

const login = ({ username, password }: Auth) => {  

    console.log('login :', { username, password }); 
    
    return { 
        user:  {
            firstName: 'Jhon',
            lastName: 'Doe',
            role: 'admin',
            // role: username === 'admin@gmail.com' ? 'admin' : 'supervisor',
        },
        token: 'lorem ipsum'
    };
}

const register = (user: any) => {

    console.log('register :', user);
    return user;
}

const logout = () => {
    return true;
}

export { login, logout, register };