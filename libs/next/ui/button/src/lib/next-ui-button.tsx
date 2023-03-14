import styles from './next-ui-button.module.css';

export interface NextUiButtonProps {
  text: string;
  color: string;
  disabled: boolean;
}

export function NextUiButton(props: NextUiButtonProps) {
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

export default NextUiButton;
