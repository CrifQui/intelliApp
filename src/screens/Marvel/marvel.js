import React, {useState} from 'react';
import ListOfCards from '../../components/ListOfCards';
import Modal from '../../components/Modal';
import Container from '../../components/ContainerScreen';

const Marvel = () => {
  const [visible, setVisible] = useState(false);
  const handlePress = () => {
    setVisible(true);
    console.log('??????');
  };

  return (
    <Container>
      <ListOfCards
        handlePress={handlePress}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
      />
      {visible && <Modal visible={visible} setVisible={setVisible} />}
    </Container>
  );
};

export default Marvel;
