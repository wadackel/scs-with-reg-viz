import React from "react";
import { storiesOf } from "@storybook/react";
import { withScreenshot } from "storybook-chrome-screenshot";
import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(withScreenshot())
  .add("with default style", () => <Button primary>Default</Button>)
  .add("with primary style", () => <Button primary>Primary</Button>);
