'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  comments: async (ctx) => {
    const { id } = ctx.params;
    const posts = await strapi.services.posts.findOne({ id });
    return posts.comments
  }
};
