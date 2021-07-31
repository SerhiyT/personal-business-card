import React from 'react';
import IconGitHub from './github';
import IconInstagram from './instagram';
import IconLinkedin from './linkedin';

interface IconProp {
  name: string;
}
const Icon = ({ name }: IconProp) => {
  switch (name) {
    case 'Instagram':
      return <IconInstagram />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    default:
      return null;
  }
};

export default Icon;
