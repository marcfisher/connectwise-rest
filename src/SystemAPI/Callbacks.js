/**
 * Created by marcfisher on 10/04/2015=7.
 * @author marcfisher
 */

/**
 *
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Callback
 * @property id
 * @property {string} description
 * @property {url} description
 * @property {number} objectId
 * @property {string} type
 * @property {string} level
 * @property {number} memberId
 * @property {boolean} inactiveFlag
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function Callbacks(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Callbacks, ConnectWise);

/**
 * POST
 * @param {Params} params
 * @returns {Promise<Callback>}
 */
Callbacks.prototype.createCallback = function (params) {
  return this.api('/system/callbacks', 'POST', params);
};

/**
 *
 * @type {Callbacks}
 */
module.exports = Callbacks;