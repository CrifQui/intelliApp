/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useFocusEffect} from '@react-navigation/native';
import {getDevices} from '../../api/api';
import {Context} from '../../contexts/contextProvider';
import useGetData from '../../hooks/useGetData';
import ListOfDevices from '../../components/ListOfDevices';
import Button from '../../components/Button';
import Container from '../../components/ContainerScreen';

const Devices = () => {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);
  const [offset, setOffset] = useState(0);
  const {token, query} = useContext(Context);
  const {loadData} = useGetData();
  useFocusEffect(
    useCallback(() => {
      setData([]);
      token && query.length > 0 && loadData(getDevices, {token, query}, setRes);
    }, [query]),
  );

  useFocusEffect(
    useCallback(() => {
      res?.results && setData(prevRes => [...prevRes, ...res?.results]);
    }, [res]),
  );

  const handlePress = () => {
    setOffset(value => value + 5);
    loadData(getDevices, {token, offset, query}, setRes);
  };

  return (
    <Container>
      <ListOfDevices data={data} />
      <Button handlePress={handlePress} text={t('@devices-get-devices')} />
    </Container>
  );
};

export default Devices;
