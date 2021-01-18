import { getRepository, Repository, In } from 'typeorm';

import IProductsRepository from '../../../repositories/IProductRepository';
import ICreateProductDTO from '../../../dtos/ICreateProductsDTO';
import IUpdateProductsQuantityDTO from '../../../dtos/IUpdateProductsQuantityDTO';
import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    title,
    description,
    price,
    category,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.ormRepository.create({
      title,
      description,
      price,
      category,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(title: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        title,
      },
    });

    return product;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const productsFound = products.map(product => product);

    const existentProducts = await this.ormRepository.find({
      where: {
        products: In(productsFound),
      },
    });

    return existentProducts;
  }

  public async updateData(
    products: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    return this.ormRepository.save(products);
  }
}

export default ProductsRepository;
