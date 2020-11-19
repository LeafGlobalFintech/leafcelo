const fs = require("fs");
class Utils {
  parseErrorString(error) {
    if (typeof error === 'string') {
      return error;
    }
    if (typeof error.Error === 'string') {
      return error.Error;
    }
    if (typeof error.Message === 'string') {
      return error.Message;
    }
    return error.toString();
  }

  extractLimitOffsetSort(req) {
    let { limit, offset, sort, sortOrder } = req.query;
    let obj = { sort: null, limit: 0, offset: 0 };
    if (sort) {
      obj.sort = {};
      obj.sort[sort] = sortOrder == "ASC" ? 1 : -1;
    }
    if (limit) {
      obj.limit = parseInt(limit) || 0;
    }
    if (offset) {
      obj.offset = parseInt(offset) || 0;
    }
    return obj;
  }

  extractFromDateToDate(req, dateField = "date") {
    let dateMatch = {
      date: {
        $gte: new Date(0),
        $lt: new Date()
      }
    };
    if (req.query.fromDate) {
      dateMatch.date.$gte = this.floorDate(req.query.fromDate);
    }

    if (req.query.toDate) {
      dateMatch.date.$lt = this.ceilDate(req.query.toDate);
    }
    return dateMatch;
  }

  ceilDate(date) {
    let newDate = new Date(date);
    newDate.setHours(23);
    newDate.setMinutes(59);
    newDate.setSeconds(59);
    return newDate;
  }

  floorDate(date) {
    let newDate = new Date(date);
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    return newDate;
  }

  fnSaveBase64ImageAsFile(imageURI, targetPath) {

    return new Promise((resolve, reject) => {
      var base64 = imageURI.replace(/^data:image\/.+;base64,/, "");
      fs.writeFile(targetPath, base64, 'base64', function (err) {
        if (err)
          reject(err);

        resolve();
      });
    });
  }

}

const utils = new Utils();

module.exports = utils;
