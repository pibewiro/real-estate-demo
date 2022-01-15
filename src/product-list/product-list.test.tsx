import { render } from '@testing-library/react';
import ProductList from './product-list';

describe('test', () => {
  it('sub test 1', () => {
    const a = render(<ProductList />);
    expect(a.container.firstChild).toMatchSnapshot();
  });
});
