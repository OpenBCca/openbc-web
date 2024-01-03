import headerData from '../../components/header/header-data';
import HeaderEnum from '../../enum/header-enum';

export default function generateHeaderData() {
  const pathToEnumMap: Record<string, HeaderEnum> = {};

  headerData.forEach((tab: any) => {
    pathToEnumMap[tab.href] = tab.value;
  });

  return pathToEnumMap;
}
