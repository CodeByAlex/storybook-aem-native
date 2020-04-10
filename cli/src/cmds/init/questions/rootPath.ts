import prompts from 'prompts';

export default async () => {
  return (await prompts({
      type: 'select',
      name: 'projectRoot',
      message: 'Select the project root folder',
      choices: getRootDirectoryChoices()
  })).projectRoot;
};

function getRootDirectoryChoices() {
  const cwd = process.cwd();
  const directories = cwd.split('/');
  const choices = [];

  directories.forEach( directory => {
      choices.push({
          title: `${cwd.split(directory)[0]}${directory}`,
          value: `${cwd.split(directory)[0]}${directory}`
      });
  });

  return choices;
}