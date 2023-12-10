import ProjectOverview from '@/components/project-overview/project-overview';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Project-Overview', () => {
  it('should render project overview', () => {
    render(<ProjectOverview />);
    const title = screen.getByText('Project Overview');
    expect(title).toBeInTheDocument();
  });

  it('should render project team', () => {
    render(<ProjectOverview />);
    const teamMemberName = screen.getByText('Alex Johnson');
    expect(teamMemberName).toBeInTheDocument();
  });
});
