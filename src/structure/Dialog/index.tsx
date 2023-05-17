"use client";
import { PropsDialog } from "./types";
import { Dialog as DialogContainer, Title, Footer, Content } from "./styles";

/**
 * Render a modal dialog
 * @param props - Props
 * @returns {JSX.Element}
 * @example 
 * import "./App.css";
import useDialog from "./customHooks/useDialog";
import Dialog from "./structure/Dialog";

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

 */
export default function Dialog({
  forwardRef,
  children = <></>,
  footer = null,
  title = null,
  closeCallback = null,
  width = 40,
}: PropsDialog) {
  return (
    <DialogContainer width={width} ref={forwardRef}>
      {title !== null || closeCallback !== null ? (
        <Title>
          <div>{title}</div>

          {closeCallback !== null ? (
            <svg
              onClick={closeCallback}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : null}
        </Title>
      ) : null}
      <Content>{children}</Content>

      {footer !== null ? <Footer>{footer}</Footer> : null}
    </DialogContainer>
  );
}
