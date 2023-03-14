import { ReactRollupUiButton } from '@storybook-nx-show/react/rollup/ui/button';
import { ReactRollupUiBanner } from '@storybook-nx-show/react/rollup/ui/banner';

export function App() {
  return (
    <>
      <ReactRollupUiBanner
        backgroundColor="#FF00FF66"
        text="This is a banner"
        borderColor="#FF00FF"
        width={350}
        height={50}
        borderWidth={2}
      />

      <ReactRollupUiButton text="Click me" color="#f300fe" disabled={false} />
    </>
  );
}

export default App;
