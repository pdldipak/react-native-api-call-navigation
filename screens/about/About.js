import React from 'react';
import { Text } from '../../styles/Global.styles';

import { AboutContainer } from './About.styles';

const About = () => {
  return (
    <AboutContainer>
      <Text dark large>
        It's just a practice application using react-native. Here is what I have
        used in this app Styled component, API call with Axios library, drawer
        and stack Navigating.
      </Text>
    </AboutContainer>
  );
};

export default About;
