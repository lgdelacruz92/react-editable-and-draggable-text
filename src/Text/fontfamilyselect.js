import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import { fonts } from "./fonts.js";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    fontSizeSelection: {
      display: "inline-block",
      marginLeft: 3
    },
    select: {
      height: "1.7em",
      outline: "none",
      marginBottom: 3
    }
  };
});

const FontFamilySelect = props => {
  const { textData, onFontFamilySelect } = props;
  const classes = useStyles();
  return (
    <MaterialUI.FormControl
      variant="outlined"
      className={clsx(classes.fontSizeSelection, textData.id)}
    >
      <MaterialUI.Select
        onChange={onFontFamilySelect}
        autoWidth
        value={"'Roboto', sans-serif"}
        className={clsx(textData.id, classes.select)}
      >
        {fonts.map((font, i) => (
          <MaterialUI.MenuItem
            key={i}
            selected={font.name === "Roboto"}
            style={{ fontFamily: font.style }}
            value={font.style}
          >
            {font.name}
          </MaterialUI.MenuItem>
        ))}
      </MaterialUI.Select>
    </MaterialUI.FormControl>
  );
};

export default FontFamilySelect;
