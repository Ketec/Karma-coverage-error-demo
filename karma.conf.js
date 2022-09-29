// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-sonarqube-reporter')
    ],
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      },
      jasmine: {
        timeoutInterval: 10000
      }
    },
    coverageReporter: {
      dir: path.join(__dirname, './karma-tests/coverage'),
      subdir: '.',
      type: 'lcovonly'
    },
    sonarqubeReporter: {
      basePath: path.join(__dirname, 'src'),
      filePattern: '**/*spec.ts',
      encoding: 'utf-8',
      outputFolder: path.join(__dirname, './karma-tests/reports'),
      legacyMode: false,
      reportName: (metadata) => metadata[0] + '.xml'
    },
    junitReporter: {
      outputDir: './karma-tests/junit',
      suite: 'karma',
    },
    reporters: ['mocha', 'coverage', 'sonarqube', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['headless'],
    singleRun: false,

    customLaunchers: {
      headless: {
        base: "ChromeHeadless",
        flags: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--disable-gpu']
      }
    }
  });
};
