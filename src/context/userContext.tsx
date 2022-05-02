import * as React from 'react';
import { UserContextType, UserInterface } from '../@types/user';

export const UserContext = React.createContext<UserContextType | null>(null);
interface BaseLayoutProps {
    children?: React.ReactNode;
  }
const UserProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  const [user, setUser] = React.useState<UserInterface>(
    {
      username: '',
      password: '',
      loggedIn: false,
    }
    )

    const saveUser = (user: UserInterface) => {
        const newUser: UserInterface = {

            username: user.username,
      password: user.password,
      loggedIn: user.loggedIn,
        }
        setUser(newUser)
      }
      
      const updateUser = (username: string) => {
        const newUser: UserInterface = {

            username: user.username,
      password: user.password,
      loggedIn: user.loggedIn,
        }
        setUser(newUser)
      }

      return (
        <UserContext.Provider value={{ user, saveUser, updateUser }}>
          {children}
        </UserContext.Provider>
      );
    }

    export default UserProvider;