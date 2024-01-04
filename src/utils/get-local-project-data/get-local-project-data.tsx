import { promises as fsPromises } from 'fs';

export async function getLocalProjectData() {
  const projectJson = await fsPromises.readFile(
    process.cwd() + '/src/json/projects.json',
    'utf8'
  );
  const projectData = JSON.parse(projectJson);

  return projectData;
}
