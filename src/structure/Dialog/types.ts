export interface PropsDialog {
  /**
   * Use the custom hook "useDialog".
   * In order to know more about ref for manipulating DOM, [check this link](https://react.dev/reference/react/useRef#manipulating-the-dom-with-a-ref)
   */
  forwardRef: React.MutableRefObject<any>;

  /**
   * It can be a JSX.Element to render a title on the modal. You can omit this attribute
   */
  title?: JSX.Element | JSX.Element[] | null;

  /**
   * It can be JSX.Element to render a footer on the modal. You can omit this attribute
   */
  footer?: JSX.Element | JSX.Element[] | null;

  /**
   * Content of the modal to render. Has to be a JSX.Element
   */
  children?: JSX.Element | JSX.Element[];

  /**
   * This function will allow to render a button on the right corner that the user can click to close the modal. Check the example for more information
   */
  closeCallback?: (() => void) | null;
  /**
   * Width for the modal when it's on a desktop or laptop screen. The size is messure on viewport width
   */
  width?: number;
}
