/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ListOfCards from '../../components/ListOfCards';
import Modal from '../../components/Modal';
import Container from '../../components/ContainerScreen';
import useGetData from '../../hooks/useGetData';
import Title from '../../components/Title';
import Subtitle from '../../components/SubTitle';
import {getCharacters, getCharacter} from '../../api/api';

const Marvel = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  const {loadData} = useGetData();
  const [visible, setVisible] = useState(false);

  const handlePress = id => {
    setCharacter([]);
    setVisible(true);
    loadData(getCharacter, id, setCharacter);
  };

  useFocusEffect(
    useCallback(() => {
      loadData(getCharacters, '', setCharacters);
    }, []),
  );

  return (
    <Container>
      <ListOfCards handlePress={handlePress} data={characters} />
      {visible && (
        <Modal visible={visible} setVisible={setVisible}>
          <>
            <Title text={character[0]?.name} />
            <Subtitle
              text={
                character[0]?.description
                  ? character[0]?.description
                  : 'No hay descripcion disponible'
              }
            />
          </>
        </Modal>
      )}
    </Container>
  );
};

export default Marvel;
