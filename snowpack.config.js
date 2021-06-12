module.exports = {
    mount: {
      public: { url: '/', static: true },
      src: { url: '/dist' },
    },
    plugins: [
        "@snowpack/plugin-sass"
    ],
    optimize: {
      bundle: true,
      treeshake: true,
      minify: true,
      sourcemap: 'external'
    }
};