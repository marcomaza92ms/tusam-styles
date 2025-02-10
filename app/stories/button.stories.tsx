import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./../components/button/button";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button Label",
  },
};
