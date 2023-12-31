import headerData from '../../app/dataModels/dictionaries/header-data';
import HeaderEnum from '../../app/dataModels/enum/header-enum';

function generateHeaderData() {
  const pathToEnumMap: Record<string, HeaderEnum> = {};

  headerData.forEach((tab: any) => {
    pathToEnumMap[tab.href] = tab.value;
  });

  return {
    pathToEnumMap,
    headerData,
  };
}

const { pathToEnumMap } = generateHeaderData();
export { headerData, pathToEnumMap };
