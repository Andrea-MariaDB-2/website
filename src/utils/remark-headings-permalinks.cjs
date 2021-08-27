const visit = require("unist-util-visit");
const regexCreator = require("emoji-regex");
const emojiRegex = regexCreator();

const emojiStrip = (string) => {
  return string.replace(emojiRegex, "");
};

const stringToBeautifiedFragment = (str = "") =>
  str
    .toLocaleLowerCase()
    .replace(/\s/g, "-")
    .replace(/\?/g, "")
    .replace(/,/g, "");

const generateFragment = (str) => stringToBeautifiedFragment(emojiStrip(str).trim())

const visitor = (node) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};

  if (node.type === "heading") {
    const text = node.children[0].value;
    if (text) {
      const fragment = generateFragment(text);
      node.children[1].url = `#${fragment}`;
      node.data.hProperties.id = fragment;
      node.data.id = fragment;
    }
  }
};

module.exports = () => async (tree) => {
  visit(tree, visitor);
  return tree;
};
