import { LoginData } from '../store/auth/types';
import { UserType } from '../store/user/types';
import Users from './users.json';

const AuthApi = (() => {
    function Login(data: LoginData): Promise<UserType> {
        return new Promise((resolve, reject) => {
            const users: UserType[] = Users;
            const currentUser: UserType | undefined = users.find(user => user.email === data.email);
            if (!currentUser) {
                return reject(new Error('User not found'));
            }
            if (currentUser.password !== data.password) {
                return reject(new Error('Password wrong'));
            }
            return resolve(currentUser);
        });
    }

    return {
        Login
    };
})();

export default AuthApi;