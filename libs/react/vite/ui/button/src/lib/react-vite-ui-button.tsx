import styles from './react-vite-ui-button.module.css';

export interface ReactViteUiButtonProps {
  text: string;
  color: string;
  disabled: boolean;
}

export function ReactViteUiButton(props: ReactViteUiButtonProps) {
  return (
    <button
      className={styles['my-btn']}
      style={{
        backgroundColor: props.color,
      }}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default ReactViteUiButton;
