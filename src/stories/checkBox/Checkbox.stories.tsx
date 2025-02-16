import React from 'react';
import '../../components/checkbox/CheckBox.module.scss';
import CheckboxItem from '@/components/checkbox/prplItem/CheckBoxItem';
import CheckboxGreen from '@/components/checkbox/greenItem/CheckBoxGreen';
import CheckboxRed from '@/components/checkbox/redItem/CheckBoxRed';
import Checkbox from '@/components/checkbox/CheckBox';

import '../../components/checkbox/prplItem/CheckBoxItem.module.scss';
import '../../components/checkbox/greenItem/CheckBoxGreen.module.scss';
import '../../components/checkbox/redItem/CheckBoxRed.module.scss';
import '../../components/checkbox/CheckBox.module.scss';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
};

const Template = () => <Checkbox />;

export const Default = Template.bind({});

export const PurpleCheckboxes = () => (
    <div className="grid">
        <div className="column style__one">
            <CheckboxItem label="Checkbox prpl 1" />
            <CheckboxItem label="Checkbox prpl 2" />
            <CheckboxItem label="Checkbox prpl 3" />
        </div>
    </div>
);

export const GreenCheckboxes = () => (
    <div className="grid">
        <div className="column style__two">
            <CheckboxGreen label="Checkbox green 1" />
            <CheckboxGreen label="Checkbox green 2" />
            <CheckboxGreen label="Checkbox green 3" />
        </div>
    </div>
);

export const RedCheckboxes = () => (
    <div className="grid">
        <div className="column style__three">
            <CheckboxRed label="Checkbox red 1" />
            <CheckboxRed label="Checkbox red 2" />
            <CheckboxRed label="Checkbox red 3" />
        </div>
    </div>
);