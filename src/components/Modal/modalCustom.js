import React from 'react';
import Proptypes from 'prop-types';
import {Modal, Alert} from 'react-native';
import Close from '../../../public/close.svg';
import {ModalContainer, Overlay, Content, Touchable} from './styles';

const ModalCustom = ({visible, setVisible, children}) => {
  const handleClose = () => {
    setVisible(false);
  };
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
          <Content>
            <Touchable onPress={() => handleClose()}>
              <Close fill={'#6889B1'} />
            </Touchable>
            {children}
          </Content>
        </Overlay>
      </Modal>
    </ModalContainer>
  );
};

ModalCustom.prototypes = {
  visible: Proptypes.bool.isRequired,
};

export default ModalCustom;
