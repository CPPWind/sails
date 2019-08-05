import React from "react";
import Typography from "./Typography";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Fonts from "./Fonts";
import FontSizes from "./FontSizes";
import FontSpacing from "./FontSpacing";
import HElements from "./HElements";
const story = storiesOf("Typography");

story.addDecorator(withKnobs);
story.add("Basic", () => <Typography />);
story.add("HElements", () => {
  const title = text("Title", "Wooticus Prime");
  return <HElements title={title} />;
});

story.add("FontSizes", () => <FontSizes />);

story.add("FontSpacing", () => {
  const measure = select(
    "Measure",
    ["measure", "measure-narrow", "measure-wide"],
    "measure"
  );
  const lineHeight = select("LineHeight", [
    "line-height-solid",
    "line-height-title",
    "line-height-copy"
  ]);
  const letterSpacing = select("Letter Spacing", [
    "letter-spacing-tight",
    "letter-spacing-1",
    "letter-spacing-2"
  ]);
  return (
    <FontSpacing
      measure={measure}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    />
  );
});

story.add("Fonts", () => <Fonts />);
