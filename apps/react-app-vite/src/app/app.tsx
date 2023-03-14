import { ReactViteUiButton } from '@storybook-nx-show/react/vite/ui/button';
import { ReactViteUiBanner } from '@storybook-nx-show/react/vite/ui/banner';

export function App() {
  return (
    <>
      <ReactViteUiBanner
        backgroundColor="#FF00FF66"
        text="This is a banner"
        borderColor="#f3f3f3"
        width={350}
        height={50}
        borderWidth={2}
      />

      <ReactViteUiButton text="Click me" color="#f300fe" disabled={false} />
    </>
  );
}

export default App;
