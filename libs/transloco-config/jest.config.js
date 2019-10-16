module.exports = {
  name: 'transloco-config',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/transloco-config',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
