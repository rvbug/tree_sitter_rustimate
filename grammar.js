/**
 * @file Tree-sitter grammar for the Rustimate Studio Language (RSL), a DSL for code-based storytelling and presentations
 * @author Rakesh Venkat <qubitai.in@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "tree_sitter_rustimate",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
