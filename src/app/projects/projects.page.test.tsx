import Projects from '@/app/projects/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('should render title', async () => {
    render(await Projects());
    const title = screen.getByText('Our Projects');
    expect(title).toBeInTheDocument();
  });
});
