import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../../components/checkbox/CheckBox';

import React, { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return (
            <Checkbox
                label="Default Checkbox"
                checked={checked}
                onChange={setChecked}
            />
        );
    },
};

export const WithCheckIcon: Story = {
    render: () => {
        const [checked, setChecked] = useState(true);
        return (
            <Checkbox
                label="Checkbox with Check Icon"
                checked={checked}
                onChange={setChecked}
                iconType="check"
            />
        );
    },
};

export const WithPlusIcon: Story = {
    render: () => {
        const [checked, setChecked] = useState(true);
        return (
            <Checkbox
                label="Checkbox with Plus Icon"
                checked={checked}
                onChange={setChecked}
                iconType="plus"
            />
        );
    },
};

export const WithMinusIcon: Story = {
    render: () => {
        const [checked, setChecked] = useState(true);
        return (
            <Checkbox
                label="Checkbox with Minus Icon"
                checked={checked}
                onChange={setChecked}
                iconType="minus"
            />
        );
    },
};