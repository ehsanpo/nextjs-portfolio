import React from "react";

import Button from "./index.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "Button",
};

export const CTA = Template.bind({});
CTA.args = {
  cta: true,
  label: "Button",
};
