import React, { FC } from 'react';

import {
  DivSectionLoader,
  DivProgressBar,
  DivProgressBarBackground,
  DivProgressIndicator,
} from './styles';

export const SectionLoader: FC = () => {
  return (
    <DivSectionLoader>
      <DivProgressBar>
        <DivProgressBarBackground>
          <DivProgressIndicator />
        </DivProgressBarBackground>
      </DivProgressBar>
    </DivSectionLoader>
  );
};
