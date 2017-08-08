/**
 * Created by txl-pc on 2017/8/8.
 */
import template from 'art-template/lib/template-web'

// const runtime = require('art-template/lib/runtime');
// import runtime from 'art-template/lib/runtime'

template.defaults.imports.timestamp = function (nums) {
  return nums + '这是过滤器'
}
//
// template.defaults.imports.log = console.log;

// template.helper('timestamp', function (nums) {
//   return nums + '这是过滤器'
// })
// console.log(template)
module.exports = template;

// runtime.timestamp = function (nums) {
//   return nums + '这是过滤器'
// }