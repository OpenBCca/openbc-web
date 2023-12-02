 
interface RepositoryInfo {
  name: string;
  description: string;
  url: string;
  languages: string[];
  language: string;
  contributors: { name: string; avatarUrl: string }[];
}


function repository (
    repositoryName: string, 
    description: string, 
    url: string, 
    langs: string[], 
    lang: string, 
    contributorsName: string[], 
    contributorsAvatarUrl: string[]
  ): RepositoryInfo {
  const contributorsInfo = contributorsName.map((name, index) => ({
    name,
    avatarUrl: contributorsAvatarUrl[index],
  }));
                    
  return {
    name: repositoryName,
    description: description,
    url: url,
    languages: langs,
    language: lang,
    contributors: contributorsInfo,
  }
}


function repositories(
    repositoryNames: string[], 
    description: string[], 
    url: string[], 
    langs: string[][], 
    lang: string[], 
    contributorsName: string[][], 
    contributorsAvatarUrl: string[][]
  ): RepositoryInfo[] {
  return repositoryNames.map((repositoryName, index) => repository(
    repositoryName[index], 
    description[index], 
    url[index], 
    langs[index], 
    lang[index], 
    contributorsName[index], 
    contributorsAvatarUrl[index]
  ));
}