/**
 * Created by txl-pc on 2017/8/8.
 */
import template from './main2_filter'
import $ from 'jquery'
import art2_filter from './art/art2_filter.html'
let render2 = template.compile(art2_filter)
let html2 = render2({
  pages: {
    totalPage: '总页数',
    page: 9,
    "page list": "分开了",
    value: '<p>哈哈哈哈哈哈哈哈</p>'
  }
})
$('#art2').html(html2)