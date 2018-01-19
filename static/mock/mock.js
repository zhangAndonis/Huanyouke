var banner = require('./banner.json')
var rym = require('./rym.json')
var a = require('./a.json')
var youji = require('./youjibanner.json')
var search = require('./search.json')
var destination = require('./destination.json')
var near = require('./near.json')
var more = require('./more.json')
var detail = require('./detail.json')
module.exports = function () {
  return {
    "list": banner,
    "remlist": rym,
    "alist":a,
    "youjilist":youji,
    "searchlist":search,
    "destinationlist":destination,
    "nearlist":near,
    "morelist":more,
    "detaillist":detail
  }
}
