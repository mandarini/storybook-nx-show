import { render } from '@testing-library/react';

import ReactViteUiBanner from './react-vite-ui-banner';

describe('ReactViteUiBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactViteUiBanner />);
    expect(baseElement).toBeTruthy();
  });
});
