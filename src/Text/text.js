import React from "react";
import BaseText from "./ basetext";
import Border from "./border";
import {
  handleMouseDown,
  handleMouseMove,
  handleMouseUp
} from "./eventHandler";
import TextControls from "./textcontrols";
import "./text.css";

const Text = props => {
  const { textData } = props;
  if (typeof textData.id === "undefined") {
    throw Error(
      "Text id is required. Please add a Text id i.e { id: unique-id, ...}"
    );
  }
  const [edit, setEdit] = React.useState(false);
  const [theTextData, setTextData] = React.useState({
    id: textData.id,
    x: textData.x || 0,
    y: textData.y || 0,
    fontSize: textData.fontSize || 16,
    fontFamily: textData.fontFamily || "sans-serif",
    fontWeight: textData.fontWeight || "normal",
    fontStyle: textData.fontStyle || "normal",
    textDecoration: textData.textDecoration || "none",
    textAlign: textData.textData || "center",
    text: textData.text || "Default Text",
    color: textData.color || "black",
    event: textData.event || {
      x: 0,
      y: 0,
      originalX: 0,
      originalY: 0,
      status: "mouse-up"
    }
  });

  const textRef = React.useRef();
  const borderRef = React.useRef();

  React.useEffect(() => {
    const onMouseDown = e => {
      if (e.target === borderRef.current) {
        setTextData(s => handleMouseDown(s, e));
      }
    };
    const onMouseMove = e => {
      if (theTextData.event.status === "mouse-down") {
        setTextData(s => handleMouseMove(s, e));
      }
    };
    const onMouseUp = e => {
      if (theTextData.event.status === "mouse-down") {
        setTextData(s => handleMouseUp(s, e));
      }
    };

    const onClick = e => {
      setEdit(s => e.target.classList.contains(textData.id));
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [textData.id, theTextData.event.status]);

  return (
    <div className="App">
      <TextControls
        onBoldClick={() => {
          setTextData({
            ...theTextData,
            fontWeight: theTextData.fontWeight === "bold" ? "normal" : "bold"
          });
        }}
        onItalicClick={() => {
          setTextData({
            ...theTextData,
            fontStyle: theTextData.fontStyle === "italic" ? "normal" : "italic"
          });
        }}
        onUnderlineClick={() => {
          setTextData({
            ...theTextData,
            textDecoration:
              theTextData.textDecoration === "underline" ? "none" : "underline"
          });
        }}
        onFontSizeSelect={e => {
          setTextData({
            ...theTextData,
            fontSize: parseInt(e.target.value)
          });
        }}
        onFontFamilySelect={e => {
          setTextData({
            ...theTextData,
            fontFamily: e.target.value
          });
        }}
        onFontColorChange={e => {
          setTextData({
            ...theTextData,
            color: e.target.value
          });
        }}
        textData={theTextData}
        edit={edit}
      />
      <Border
        edit={edit}
        ref={borderRef}
        textData={theTextData}
        color="lightgrey"
      >
        <BaseText
          ref={textRef}
          textData={theTextData}
          edit={edit}
          onClick={() => setEdit(true)}
          onChange={e => setTextData({ ...theTextData, text: e.target.value })}
        />
      </Border>
    </div>
  );
};

export default Text;
