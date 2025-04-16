import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within, expect } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Components/ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    className: {
      control: { type: "text" },
      description: "Additional Tailwind classes",
    },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
    await expect(button).toHaveTextContent("Button");
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const CustomStyles: Story = {
  args: {
    className: "bg-purple-500 hover:bg-purple-700 text-yellow-300",
  },
};
