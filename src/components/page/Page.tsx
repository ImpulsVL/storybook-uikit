import React from 'react';
import TextBlock from '../text/Text';

import './Page.scss';
import Checkbox from '../checkbox/CheckBox';

const ComponentsPage: React.FC = () => {
  return (
    <main className='main'>
        <TextBlock />
        <Checkbox />
    </main>
  );
};

export default ComponentsPage;