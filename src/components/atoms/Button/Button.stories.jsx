import Button from "./Button";

export default {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Default Button",
  },
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};

export const Block = {
  args: {
    primary: true,
    isBlock: true,
  },
};
