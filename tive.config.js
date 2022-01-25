const { argv } = process
const desc = (argv.length > 4 && argv.slice(-1)[0]) || 'commit desc'

module.exports = {
  shell: [
    'git status',
    'git add .',
    `git commit -m "${desc}"`,
    'git push origin master',
    'npm run prettier',
    'npm publish',
  ],
}
