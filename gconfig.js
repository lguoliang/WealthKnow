module.exports = {
  clean: {
    src: [
      '!./src/**/style/**/*.wxss',
      '!./src/**/app.wxss',
      './src/**/*.wxss',
    ]
  },
  wxss: {
    src: [
      '!./src/**/wxss/**/*.scss',
      './src/**/*.scss'
    ],
    dest: './src',
    autoprefixer: {
      overrideBrowserslist: ['last 3 versions'],
      cascade: false,
      remove:false
    },
    minifyCss: {
      advanced: false,
      compatibility: "ie7",
      keepBreaks: true,
      keepSpecialComments: '*'
    },
    rename: {
      extname: ".wxss"
    }
  }
}