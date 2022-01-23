module.exports = {
  async redirects() {
    return [
      {
        source: '/mint',
        destination: 'https://mint.thatyisustesting.ml/',
        permanent: true,
      },
    ]
  },
}