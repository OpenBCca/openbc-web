import ProjectStatusEnum from '@/enum/project-status-enum';

const getProjectStatusColor = (status: ProjectStatusEnum | undefined) => {
  switch (status) {
    case ProjectStatusEnum.active:
      return 'green';
    case ProjectStatusEnum.completed:
      return 'blue';
    case ProjectStatusEnum.onHold:
      return 'orange';
    case ProjectStatusEnum.inactive:
      return 'gray';
    case ProjectStatusEnum.comingSoon:
      return 'purple';
    default:
      return 'black';
  }
};

export default getProjectStatusColor;
