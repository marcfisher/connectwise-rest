/**
 * Created by kgrube on 7/14/2016.
 * @author kgrube
 */

/**
 * @typedef {object} SystemAPI
 * @property {Callbacks} Callbacks
 * @property {Members} Members
 * @property {Reports} Reports
 */

/**
 *
 * @param {CWOptions} options
 * @returns {SystemAPI}
 * @constructor
 */
function SystemAPI(options) {
  var _Callbacks = require('./Callbacks');
  var _Members = require('./Members');
  var _Reports = require('./Reports');

  return {
    Callbacks: new _Callbacks(options),
   	Members: new _Members(options),
    Reports: new _Reports(options)
  }
}

/**
 *
 * @type {SystemAPI}
 */
module.exports = SystemAPI;
