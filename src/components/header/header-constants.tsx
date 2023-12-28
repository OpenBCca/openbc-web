export const enum HeaderEnum {
  default = 'default',
  projects = 'projects',
  joinUs = 'join-us',
  about = 'about',
}

export const tabsData = [
  { label: 'Projects', value: HeaderEnum.projects, href: '/projects' },
  { label: 'Join Us', value: HeaderEnum.joinUs, href: '/join-us' },
  { label: 'About', value: HeaderEnum.about, href: '/about' },
];

export const pathToEnumMap: Record<string, HeaderEnum> = {};

tabsData.forEach((tab) => {
  pathToEnumMap[tab.href] = tab.value;
});
