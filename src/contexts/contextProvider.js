import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

const AppProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [query, setQuery] = useState('');
  const values = {isAuth, setIsAuth, token, setToken, query, setQuery};
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

AppProvider.prototypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
