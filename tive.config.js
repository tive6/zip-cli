const { argv } = process
const desc = (argv.length > 4 && argv.slice(-1)[0]) || 'commit desc'

module.exports = {
  shell: [
    'npm run prettier',
    'git status',
    'git add .',
    `git commit -m "${desc}"`,
    'git push origin master',
    // 'npm publish --access',
  ],
}
