# rc-dialog-native
 
Render a modal with the `dialog` html tag and take advantage of the native features of this tag

# Description

- Allow press `ESC` key to close modal (native)
- Allow click outside the modal to close (native)
- Allow disable `tabindex` the elements on the back of the modal
- Allow close the modal on any moment programatically

# Installation

Use npm to install this library

`npm i rc-dialog-native`

# Props

Made with `ts` and `jsdoc`. Props autocomplete should be on the code editor.

| Prop name     | Description                                                                                                         | Type                             | Required |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| forwardRef    | Reference of the `dialog` tag.                                                                                      | React.MutableRefObject<any>      | Yes      |
| title         | Title label to display on the modal once it's open                                                                  | JSX.Element\|JSX.Element[]\|null | No       |
| footer        | Elements to render on the footer of the modal                                                                       | JSX.Element\|JSX.Element[]\|null | No       |
| children      | Content of the modal once it's open                                                                                 | JSX.Element\|JSX.Element[]\|null | No       |
| closeCallback | Function that will allow to close the modal. If it's provided,  will render an "X" icon in order to close the modal | (()=>void)\|null                 | No       |
| width         | Width size (on viewport scale) for the modal on desktop and laptops devices                                         | number                           | No       |

# Examples

## React (No frameworks)

```tsx
import { Dialog, useDialog } from "rc-dialog-native";

function App() {
  const dialog = useDialog();

  return (
    <main>
      <p onClick={dialog.showModal}>Read terms and conditions</p>

      <Dialog
        closeCallback={dialog.close}
        forwardRef={dialog.forwardRef}
        title={<p>Terms and conditions</p>}
        width={25}
        footer={<button onClick={dialog.close}>I'm agree</button>}
      >
        <ol>
          <li>Do not be agressive</li>
          <li>Do not disturbe on the community</li>
          <li>Not allow to sell any kind of product or service</li>
        </ol>
      </Dialog>
    </main>
  );
}

export default App;
```

## Nextjs (`v^13.4.2`)

1. Create a `Client Component`. Like the next below
   
```tsx
"use client";

import React from "react";
import { Dialog, useDialog } from "rc-dialog-native";

export default function TermsAndConditions() {
  const dialog = useDialog();
  return (
    <>
      <button type="button" onClick={dialog.showModal}>
        TermsAndConditions
      </button>

      <Dialog forwardRef={dialog.forwardRef}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quidem
          quos? Nobis, et iure eaque ipsum quae eveniet totam magnam asperiores
          suscipit autem delectus dolorum perferendis nostrum! Animi officia eum
        </p>
      </Dialog>
    </>
  );
}

```

2. Import the component into a server or client component.
```tsx
import TermsAndConditions from "./pages/TermsAndConditions";

// This is a server component
export default function Home() {
  return (
    <form>
      <label htmlFor="">Email</label>
      <input type="email" />
      <TermsAndConditions />
    </form>
  );
}
```.
