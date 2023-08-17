function createDevErrorBody(error) {
  return {
    status: error.status || "error",
    message: error.message,
    error,
    stack: error.stack,
  };
}

function createAppErrorBody(error) {
  return {
    status: error.status || "error",
    message: error.message,
  };
}

function createCastErrorBody(error) {
  return {
    status: "fail",
    message: `Invalid ${error.path}: ${error.value}`,
  };
}

function createDuplicateKeyErrorBody(error) {
  return {
    status: "fail",
    message: `Invalid key: '${error.keyValue.name}' already exists.`,
  };
}

function createValidationErrorBody(error) {
  const messages = [];
  for (const [field, message] of Object.entries(error.errors)) {
    messages.push(`${field}: ${message}`);
  }
  return {
    status: "fail",
    message: messages,
  };
}

function createWebTokenErrorBody(error) {
  return {
    status: "fail",
    message: `Authorization error: ${error.message}.`,
  };
}

function createWebTokenExpiredBody(error) {
  return {
    status: "fail",
    message: `Authorization error: ${error.message} ${error.expiredAt}.`,
  };
}

function createGenericErrorBody() {
  return {
    status: "error",
    message: "Oops, something went wrong.",
  };
}

export default (error, req, res, next) => {
  let statusCode;
  let result;

  if (process.env.NODE_ENV === "development") {
    statusCode = error.statusCode || 500;
    result = createDevErrorBody(error);
  } else if (error.name === "CastError") {
    statusCode = 400;
    result = createCastErrorBody(error);
  } else if (error.name === "MongoError" && error.code === 11000) {
    statusCode = 400;
    result = createDuplicateKeyErrorBody(error);
  } else if (error.name === "ValidationError") {
    statusCode = 400;
    result = createValidationErrorBody(error);
  } else if (error.name === "JsonWebTokenError") {
    statusCode = 401;
    result = createWebTokenErrorBody(error);
  } else if (error.name === "TokenExpiredError") {
    statusCode = 401;
    result = createWebTokenExpiredBody(error);
  } else if (error.isOperational) {
    statusCode = error.statusCode || 500;
    result = createAppErrorBody(error);
  } else {
    statusCode = 500;
    result = createGenericErrorBody();
    console.error(error);
  }

  res.status(statusCode).json(result);
};
