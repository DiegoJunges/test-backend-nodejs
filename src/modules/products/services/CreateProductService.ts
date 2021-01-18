import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/App.Error';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductRepository';

interface IRequest {
  title: string;
  description: string;
  price: number;
  category: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    title,
    description,
    price,
    category,
  }: IRequest): Promise<Product> {
    const productExists = await this.productsRepository.findByName(title);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }

    const product = await this.productsRepository.create({
      title,
      description,
      price,
      category,
    });

    return product;
  }
}

export default CreateProductService;
