var banner = require('./banner.json')
var rym = require('./rym.json')
var a = require('./a.json')
var youji = require('./youjibanner.json')
module.exports = function () {
  return {
    "list": banner,
    "remlist": rym,
    "alist":a,
    "youjilist":youji
  }
}
