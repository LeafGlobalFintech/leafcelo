const Schema = require('mongoose').Schema

class BaseSchema extends Schema {
  constructor(...params) {
    super(...params)
    this.statics = {
      list: this.list
    }
  }

  async list({ find, aggregate, limit, offset, sort }, project) {
    limit = limit === 0 ? 0 : (limit || 50);
    offset = offset || 0;
    sort = sort || { _id: -1 };
    find = find || {};
    let mongooseQuery = null;
    if (aggregate) {
      mongooseQuery = this.aggregate(aggregate, project).skip(offset).sort(sort);
    }
    else {
      mongooseQuery = this.find(find, project).skip(offset).sort(sort);
    }
    if (limit !== 0) {
      mongooseQuery = mongooseQuery.limit(limit);
    }

    return await mongooseQuery.exec();
  }

}


module.exports = BaseSchema;
