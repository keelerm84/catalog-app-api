/**
 * Category
 *
 * @module      :: Model
 * @description :: Representation for the catalog model
 *
 */

module.exports = {

  attributes: {
    name: {
      type: "string",
      required: true
    },
    ancestors: {
      type: "array",
      defaultsTo: []
    }
  }

};
