export interface UserInterface {
    password: string;
    username: string;
    loggedIn: boolean;
  }
  export type UserContextType = {
    user: UserInterface;
    saveUser: (user: UserInterface) => void;
    updateUser: (username: string) => void;
  };