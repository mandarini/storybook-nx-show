import styles from './react-rollup-ui-button.module.css';

export interface ReactRollupUiButtonProps {
  text: string;
  color: string;
  disabled: boolean;
}

export function ReactRollupUiButton(props: ReactRollupUiButtonProps) {
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

export default ReactRollupUiButton;
