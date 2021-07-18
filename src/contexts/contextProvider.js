import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

const AppProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(true);
  const [token, setToken] = useState('');
  const values = {isAuth, setIsAuth, token, setToken};
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

AppProvider.prototypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
