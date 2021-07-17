import React from 'react';
import Proptypes from 'prop-types';
import {Modal, Alert} from 'react-native';
import {ModalContainer, Overlay, Content} from './styles';

const ModalCustom = ({visible, setVisible, children}) => {
  return (
    <ModalContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('modal has been closed');
          setVisible(!visible);
        }}>
        <Overlay>
          <Content>{children}</Content>
        </Overlay>
      </Modal>
    </ModalContainer>
  );
};

ModalCustom.prototypes = {
  visible: Proptypes.bool.isRequired,
};

export default ModalCustom;
