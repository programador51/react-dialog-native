import "./App.css";
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
