import headerData from '@/components/header/header-data';
import generateHeaderData from './header-map';

describe('Header Map', () => {
  it('should match headerData to HeaderEnum', () => {
    expect(Object.keys(generateHeaderData()).length).toEqual(headerData.length);

    headerData.forEach((tab) => {
      expect(generateHeaderData()[tab.href]).toEqual(tab.value);
    });
  });
});
