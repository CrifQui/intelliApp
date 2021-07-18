import {useState} from 'react';

const useGetData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadData = async (getData, param, setData) => {
    setLoading(true);
    const result = await getData(param);
    if (result.status === 200) {
      setData(result.data);
    } else if (result.status === 400) {
      setError(true);
      setErrorMessage(result.data.message[0]);
    } else if (result.status === 401) {
      setErrorMessage({email: `${result.data.error} - ${result.data.msg}`});
      setError(true);
      console.log(result.data);
    }
    setLoading(false);
  };

  return {loading, error, errorMessage, loadData};
};

export default useGetData;
