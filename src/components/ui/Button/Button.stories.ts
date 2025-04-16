import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { mockButtonProps } from "./Button.mocks";

const meta: Meta<typeof Button> = {
  title: "components/ui/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    ...mockButtonProps.base,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Borderless: Story = {
  args: {
    variant: "borderless",
    label: "Borderless Button",
  },
};
