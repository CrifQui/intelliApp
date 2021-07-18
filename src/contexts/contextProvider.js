import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});

const AppProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(true);
  const [token, setToken] = useState(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVkNjE1YjA0MTU2ODBlYzUwYzIxNmIyMjcwMjY2MzU3ZjJiYjE4NGM4YTdkNzZhMDBkMDY0NjNmNjc2ZGU5OGIwMTViZjliNTc1YWViYTU3In0.eyJhdWQiOiIyIiwianRpIjoiNWQ2MTViMDQxNTY4MGVjNTBjMjE2YjIyNzAyNjYzNTdmMmJiMTg0YzhhN2Q3NmEwMGQwNjQ2M2Y2NzZkZTk4YjAxNWJmOWI1NzVhZWJhNTciLCJpYXQiOjE2MjY2MjEyMTUsIm5iZiI6MTYyNjYyMTIxNSwiZXhwIjoxNjU4MTU3MjE1LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.s5Af36wJN5gGgaogQlIOft0khpUO9TAr4Yb6X1rKtODZC3VBQbg84BuJ87OHLSHezPejoTp8hI-kSu9VEwARod9-Ua1iUZHEJiqUB60nZcbHPo_CQEVSOYhPoQKHv4ZWHd88fkAWmSRQYhrTmaG191RGRdylXzC5L3z9ihq_6hw_9JapwwwrBLmnJmws7S3jIROUq7YSfrzF6cpr8A6kKf2f531qMTAkn79ldE3FvoYRcv-ZXGszu4BmDIqpmvgnaDy-4o04OsFS25sPlaFQJU7WGVkbAvB2lZbomdVSlWpplPBZLcR_l6EiTtLpjZRVgtQctswLo93qIM88XKuVC2xgDK_Q-Xw4iKS4qpfFIFUCGpwx9Y3rFIf5kpiXM0bq3Q1Yv9_YUA1YISIJ9r84vhSbMnXkgQdMXcloLNX2haCuHkzhqgNILaaXOfSIUk38Zpxx_GE8Lfn5oUkSD_bX_Uj5SGLKZGYcwQplAWeBOgZejZ9zCve5tJ13kKEKxo0zcediHx-hnpDYHeLNmaSvBy_pZ0p3sk8nRY2aqXxBNELwyyDiwztHcBdaW7NRiqe-D0WkLD9D8NP6T3OpHpKhnBL5bKy58020_xSib-JZXh8-ca07m60yYHatwIK8RJZNpsA-YdW_CWX6Aq3YWh-06e8PUYHExAYH1P1Q9ovnjFQ',
  );
  const [query, setQuery] = useState('');
  const values = {isAuth, setIsAuth, token, setToken, query, setQuery};
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

AppProvider.prototypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
