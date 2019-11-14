# react-editable-and-draggable-text

> This component is editable and draggable text

[![NPM](https://img.shields.io/npm/v/react-editable-and-draggable-text.svg)](https://www.npmjs.com/package/react-editable-and-draggable-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Example](https://media.giphy.com/media/VDHZr9ubhTmOPDHT4p/giphy.gif "Example")](https://media.giphy.com/media/VDHZr9ubhTmOPDHT4p/giphy.gif "Example")

## Install

```bash
npm install --save react-editable-and-draggable-text
```

## Usage

```jsx
import React from "react";
import Text from "./Text/text";

function App() {
  const text = {
    id: "unique-id-123",
    text: "Hello World"
  };
  return (
    <div className="App">
      <Text textData={text} />
    </div>
  );
}

export default App;
```

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
