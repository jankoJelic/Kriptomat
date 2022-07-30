import {Linking} from 'react-native';

const goToKriptomatWebSite = () => {
  Linking.openURL('https://app.kriptomat.io').catch(err =>
    console.error('An error occurred', err),
  );
};

export default goToKriptomatWebSite;
