#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
  name        : 'learning-graphql',
  title       : 'Learning GraphQL',
  subtitle    : 'Learning GraphQL through a terminal workshop.',
  appDir      : __dirname,
  menuItems   : [],
  exerciseDir : fpath('./exercises/')
});
