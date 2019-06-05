module.exports ={
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/github", {
      "assets": [
        {"path": "dist/alicerce.css", "label": "CSS distribution"}
      ]
    }],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    ['@semantic-release/git', {message: `chore(release): \${nextRelease.version} [skip ci]`}],
  ],
}
