/**
 * Item
 *
 * @module      :: Item
 * @description :: The representation of any item in our catalog
 *
 */

module.exports = {

  attributes: {
    name: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    imageUrl: {
      type: "string"
    },
    category: {
      type: "integer",
      required: true
    }
  }

};
