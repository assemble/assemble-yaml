# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %})  [![Build Status](http://github.com/assemble/{%= name %}.png?branch=master)](http://github.com/assemble/{%= name %})

> {%= description %}

Visit [Assemble's documentation](http://assemble.io) for many more examples and pointers on getting started.


## Getting Started
{%= _.doc('getting-started.md') %}


## Methods
{%= _.doc('methods.md') %}


## Release History
{% _.each(changelog, function(details, version) {
  var date = details.date;
  if (date instanceof Date) {
    date = grunt.template.date(new Date(date.getTime() + date.getTimezoneOffset() * 60000), 'yyyy-mm-dd');
  }
  print('\n * ' + [
    date,
    version,
    details.changes.join(' '),
  ].join('\u2003\u2003\u2003'));
}); %}

***

Project authored by [Brian Woodward](https://github.com/doowb/).

_This file was generated on Mon Sep 02 2013 09:44:51._
