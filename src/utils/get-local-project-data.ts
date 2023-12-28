import { promises as fs } from 'fs';

export async function getLocalProjectData() {
  const projectJson = await fs.readFile(
    process.cwd() + '/src/json/projects.json',
    'utf8'
  );
  const projectData = JSON.parse(projectJson);

  return projectData;
}
