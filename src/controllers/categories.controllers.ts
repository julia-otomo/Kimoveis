import { Request, Response, request } from "express";
import {
  TCategoryRequest,
  TCategoryResponse,
  TCategoryWithRealEstate,
} from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";
import listAllCategoriesService from "../services/categories/listAllCategories.service";
import listAllPropertiesByCategoryService from "../services/categories/listAllPropertiesByCategory.service";

const createCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TCategoryRequest = request.body;

  const category: TCategoryResponse = await createCategoryService(requestBody);

  return response.status(201).json(category);
};

const listAllCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allCategories: TCategoryResponse[] = await listAllCategoriesService();

  return response.json(allCategories);
};

const listAllPropertiesByCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryId: number = Number(request.params.id);

  const properties: TCategoryWithRealEstate =
    await listAllPropertiesByCategoryService(categoryId);

  return response.json(properties);
};

export {
  createCategoryController,
  listAllCategoriesController,
  listAllPropertiesByCategoryController,
};
