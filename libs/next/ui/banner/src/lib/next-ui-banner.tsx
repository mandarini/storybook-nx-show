import styles from './next-ui-banner.module.css';

export interface NextUiBannerProps {
  backgroundColor: string;
  borderColor: string;
  text: string;
  borderWidth: number;
  width: number;
  height: number;
}

export function NextUiBanner(props: NextUiBannerProps) {
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

export default NextUiBanner;
