interface Auth {
    username: string;
    password: string;
};

interface AuthState {
    user: User | null;
    token: string | null;
} 

interface User {
    firstName: string
    lastName: string
    role: string
}
  
export type { Auth, AuthState, User };