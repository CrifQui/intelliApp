import {useState} from 'react';

const useGetData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadData = async (getData, param, setData) => {
    setLoading(true);
    const result = await getData(param);
    console.log(result.data);
    if (result.status === 200) {
      setData(result.data);
    }
    if (result.status === 400) {
      setError(true);
      setErrorMessage(result.data.message[0]);
    }
  };

  return {loading, error, errorMessage, loadData};
};

export default useGetData;
