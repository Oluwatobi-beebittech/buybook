module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'added',
          'updated',
          'removed',
          'fixed',
          'wip',
        ],
      ],
    },
  };
  