/**
 * Created by txl-pc on 2017/8/8.
 */
import template from 'art-template/lib/template-web'
template.defaults.imports.timestamp = function (nums) {
  return nums + '这是过滤器'
}
template.defaults.imports.log = console.log;
module.exports = template;