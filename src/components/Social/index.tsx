import React from 'react';
import { Icon } from 'shared/Icons';
import { ID } from 'shared/utils/common';
import { socialMedia } from 'shared/utils/configs';
import { StyledSocialList, StyledSideSocial } from './style';

const Social = () => {
  return (
    <StyledSideSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }: any) => (
            <li key={ID()}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </StyledSideSocial>
  );
};

export default Social;
