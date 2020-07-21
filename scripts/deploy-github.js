const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/icmla2020192/icmla2020192.github.io.git',
  },
  () => {
    console.log('Deploy Complete!!')
  }
)
