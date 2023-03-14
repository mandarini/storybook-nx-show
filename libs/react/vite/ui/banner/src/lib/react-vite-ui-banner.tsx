import styles from './react-vite-ui-banner.module.css';

export interface ReactViteUiBannerProps {
  backgroundColor: string;
  borderColor: string;
  text: string;
  borderWidth: number;
  width: number;
  height: number;
}

export function ReactViteUiBanner(props: ReactViteUiBannerProps) {
  return (
    <div
      className={styles['container']}
      style={{
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth + 'px',
        width: props.width + 'px',
        height: props.height + 'px',
      }}
    >
      <p>{props.text}</p>
    </div>
  );
}

export default ReactViteUiBanner;
