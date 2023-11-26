import Header from '@/components/header/header';
import { render } from '@testing-library/react';

// Use this if you want to skip this test
describe.skip('skips snapshot test', () => {});

describe('Header snapshot test', () => {
  it('should render header unchanged', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
