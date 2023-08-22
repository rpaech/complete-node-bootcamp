import ApiRequest from "../helpers/apiRequest.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

export const createOne = (Model) =>
  asyncErrorWrapper(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const getOne = (Model, populateOptions) =>
  asyncErrorWrapper(async (req, res, next) => {
    const query = Model.findById(req.params.id);
    if (populateOptions) query.populate("reviews");
    const doc = await query;

    if (!doc)
      throw new AppError(`No document found for ID '${req.params.id}'.`, 404);

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const getMany = (Model, validFields) =>
  asyncErrorWrapper(async (req, res, next) => {
    const apiRequest = new ApiRequest(Model.find(), req.query, validFields)
      .filter()
      .sort()
      .select()
      .paginate();
    const docs = await apiRequest.query;
    res.status(200).json({
      status: "success",
      results: docs.length,
      data: {
        data: docs,
      },
    });
  });

export const updateOne = (Model) =>
  asyncErrorWrapper(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc)
      throw new AppError(`No document found for ID '${req.params.id}'.`, 404);

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

export const deleteOne = (Model) =>
  asyncErrorWrapper(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc)
      throw new AppError(`No document found for ID '${req.params.id}'.`, 404);

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
