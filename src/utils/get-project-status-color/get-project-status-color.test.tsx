import ProjectStatusEnum from '@/enum/project-status-enum';
import getProjectStatusColor from '@/utils/get-project-status-color/get-project-status-color';

describe('getProjectStatusColor function', () => {
  it('should return the correct color for active status', () => {
    const result = getProjectStatusColor(ProjectStatusEnum.active);
    expect(result).toEqual('green');
  });

  it('should return the correct color for completed status', () => {
    const result = getProjectStatusColor(ProjectStatusEnum.completed);
    expect(result).toEqual('blue');
  });

  it('should return the correct color for onHold status', () => {
    const result = getProjectStatusColor(ProjectStatusEnum.onHold);
    expect(result).toEqual('orange');
  });

  it('should return the correct color for inactive status', () => {
    const result = getProjectStatusColor(ProjectStatusEnum.inactive);
    expect(result).toEqual('gray');
  });

  it('should return the correct color for comingSoon status', () => {
    const result = getProjectStatusColor(ProjectStatusEnum.comingSoon);
    expect(result).toEqual('purple');
  });

  it('should return the default color for undefined status', () => {
    const result = getProjectStatusColor(undefined);
    expect(result).toEqual('black');
  });
});
