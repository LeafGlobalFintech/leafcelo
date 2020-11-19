
// function that create error object
const resError = function (err, msg = '') {
  return {
    status: false,
    err: err,
    msg: msg
  }
}

// function that create success object
const resSuccess = function (obj, msg = '') {
  return {
    status: true,
    data: obj,
    msg: msg
  }
}

// middleware function that will be used to attache sendError and sendSuccess method to response.
// that will make our response uniformed.
const commonMW = function (req, res, next) {
  // send Success Response
  res.sendSuccess = function (data, msg = 'success') {
    if (typeof data != 'object') {
      data = { data: data }
    }
    res.json(resSuccess(data, msg));
  }

  // Send Error Response.
  res.sendError = function (err, msg = 'error', status = 400) {
    if (typeof err != 'object') {
      err = { err: err }
    }
    res.status(status).json(resError(err, msg));
  }

  next();
}

module.exports = commonMW;
