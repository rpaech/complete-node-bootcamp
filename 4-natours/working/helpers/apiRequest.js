import AppError from "./appError.js";

class ApiRequest {
  constructor(query, params, fields) {
    this.query = query;
    this.params = params;
    this.validFields = fields;
  }

  #parseQueryCriteria(query) {
    const validFields = new Set(this.validFields);
    const validOperators = new Set(["gte", "gt", "lte", "lt", "eq", "ne"]);

    const result = {};

    for (const [field, fieldValue] of Object.entries(query)) {
      if (validFields.has(field)) {
        switch (typeof fieldValue) {
          case "object":
            for (const [op, opValue] of Object.entries(fieldValue)) {
              if (!validOperators.has(op))
                throw new AppError(`Invalid query operator '${op}'.`, 404);
              if (!result[field]) result[field] = {};
              result[field][`$${op}`] = opValue;
            }
            break;
          case "boolean":
          case "number":
          case "string":
            result[field] = fieldValue;
            break;
          default:
            throw new AppError(
              `Invalid query type: '${field}' is of type '${typeof fieldValue}'.`,
              404,
            );
        }
      }
    }

    return result;
  }

  filter() {
    this.query.find(this.#parseQueryCriteria(this.params));

    return this;
  }

  sort() {
    if (this.params.sort) {
      const sortBy = this.params.sort.split(",").join(" ");
      this.query.sort(sortBy);
    } else {
      this.query.sort("-createdAt");
    }
    return this;
  }

  select() {
    if (this.params.fields) {
      const fields = this.params.fields.split(",").join(" ");
      this.query.select(fields);
    } else {
      this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const pageNo = Number(this.params.page) || 1;
    const itemsPerPage = Number(this.params.limit) || 100;

    this.query.skip(itemsPerPage * (pageNo - 1)).limit(itemsPerPage);

    // if (this.params.page) {
    //   const tourCount = await Tour.countDocuments();
    //   if (tourCount / itemsPerPage < pageNo)
    //     throw new Error("Invalid page number: Exceeds page count.");
    // }
    return this;
  }
}

export default ApiRequest;
