exports.success = (req, res, message = '', status = 200 ) => {
  res.status(status).json({
      error: false,
      body: message,
      status
  });
}

exports.error = (req, res, message = 'Internal Error', status = 500 ) => {
  res.status(status).json({
      error: true,
      body: message,
      status
  });
}
