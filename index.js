module.exports = function(options) {

  options = options || {};
  options.headElementsTag = options.headElementsTag || 'posthtml-head-elements';

  var jsonOne = JSON.parse(fs.readFileSync(options.headElements), 'utf8');

  return function posthtmlHeadElements(tree) {

    tree.match({tag: options.headElementsTag}, function() {
      return {
        tag: false, // delete this node, safe content
        content: buildNewTree(jsonOne, options.EOL || '\n')
      };
    });

    return tree;

  };

};