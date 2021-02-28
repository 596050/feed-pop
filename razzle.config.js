const lessOptions = {
  javascriptEnabled: true,
}

module.exports = {
  experimental: {
    newBabel: true,
  },
  plugins: [
    {
      name: 'serviceworker',
      options: {
        autoUpdate: true,
      },
    },
    {
      name: 'less',
      options: {
        less: {
          dev: lessOptions,
          prod: lessOptions,
        },
      },
    },
  ],
}
