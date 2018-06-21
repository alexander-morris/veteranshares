
var GLOBSTAR = '**/*';

var basePaths = {
    src: 'src/',
    dest: 'docs/'
};

var typeMap = {
    // templates
    jade:       ['*.jade'],
    html:       ['*.html'],

    // styles
    css:        [GLOBSTAR + '.css'],
    less:       [GLOBSTAR + '.less'],

    // scripts
    js:         [GLOBSTAR + '.js', '!lib/*.js'],
    coffee:     [GLOBSTAR + '.coffee'],
    jslibs:     ['lib/*.js', '!lib/'],

    // images
    png:        [GLOBSTAR + '.png'],
    jpg:        [GLOBSTAR + '.jpg', GLOBSTAR + '.jpeg'],
    gif:        [GLOBSTAR + '.gif'],
    svg:        [GLOBSTAR + '.svg'],

    // extras
    extras:   [GLOBSTAR]
};

module.exports = {
  appName: 'blockchainwtfedu',
  SERVER_PORT: 1339,
  GLOBSTAR: GLOBSTAR,
  basePaths: basePaths,


  typePaths: {
    templates: {
      src: basePaths.src + 'templates/',
      dest: basePaths.dest + ''
    },
    styles: {
      src: basePaths.src + 'styles/',
      dest: basePaths.dest + 'css/'
    },
    scripts: {
      src: basePaths.src + 'scripts/',
      dest: basePaths.dest + 'js/'
    },
    images: {
      src: basePaths.src + 'images/',
      dest: basePaths.dest + 'images/'
    },
    extras: {
      src: basePaths.src + 'extras/',
      dest: basePaths.dest + ''
    },    
    fonts: {
      src: basePaths.src + 'styles/fonts/',
      dest: basePaths.dest + 'css/fonts/'
    },
    i18n: {
      src: basePaths.src + 'extras/locales',
      dest: basePaths.dest + 'locales/'
    }
  },

  typeMap: typeMap,

  appFiles: {
    templates:  typeMap.jade.concat(typeMap.html),
    styles:     typeMap.css.concat(typeMap.less),
    scripts:    typeMap.js.concat(typeMap.coffee),
    images:     typeMap.png.concat(typeMap.gif).concat(typeMap.jpg).concat(typeMap.svg),
    extras:     typeMap.extras
  },

  vendorFiles: {
    scripts:    typeMap.jslibs
  },

  scriptOrder: [
    'jquery.min.js',
    'jquery.dropotron.min.js',
    'browser.min.js',
    'breakpoints.min.js',
    'util.js',
    'main.js'
  ],

  styleOrder: [
    'main.css',
    'custom.css'
  ]
};
