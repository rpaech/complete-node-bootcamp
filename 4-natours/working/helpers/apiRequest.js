class ApiRequest {
  constructor(query, params) {
    this.query = query;
    this.params = params;
  }

  filter(parser) {
    this.query.find(parser(this.params));

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
