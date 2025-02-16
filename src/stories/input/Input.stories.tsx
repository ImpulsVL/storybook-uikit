import type { Meta, StoryObj } from '@storybook/react';

import Input from '../../components/input/input';
import styles from '../../components/input/Input.module.scss';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default',
    value: '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    placeholder: 'Type',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    value: '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    placeholder: 'Type password',
    type: 'password',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    value: '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
    placeholder: "Error",
    className: styles.error,
  },
};