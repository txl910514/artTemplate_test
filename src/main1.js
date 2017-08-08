/**
 * Created by txl-pc on 2017/8/8.
 */
require('./main1_filter')
import $ from 'jquery'
import art1_filter from './art/art1_filter.art'
let html1 = art1_filter({
  name: '小胖',
  age: 18,
  height: 183,
  'honme list': 'shijicheng'
})
$('#art1').html(html1)
console.log(1)