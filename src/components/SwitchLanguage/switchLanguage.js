import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {Touchable} from './styles';

const SwitchLanguage = () => {
  const {i18n} = useTranslation('common');
  const handlePress = () => {
    const language = i18n.language;
    language === 'es' ? i18n.changeLanguage('en') : i18n.changeLanguage('es');
  };
  return (
    <Touchable onPress={() => handlePress()}>
      <Text>{i18n.language}</Text>
    </Touchable>
  );
};

export default SwitchLanguage;
