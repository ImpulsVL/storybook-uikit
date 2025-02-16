import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/button/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: 'danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};