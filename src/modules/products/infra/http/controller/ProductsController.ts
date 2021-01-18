import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description, price, category } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      title,
      description,
      price,
      category,
    });

    return response.json(product);
  }
}
