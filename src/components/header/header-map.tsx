import { headerData } from './header-data';
import HeaderEnum from './header-enum';

export const pathToEnumMap: Record<string, HeaderEnum> = {};

headerData.forEach((tab) => {
  pathToEnumMap[tab.href] = tab.value;
});
export { headerData };
