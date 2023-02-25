import React from 'react';
import { UserType } from '../types';

const UserContext = React.createContext<UserType | null | undefined>(undefined);

export default UserContext;
