import { Entity } from './entity';

export interface IService<TModel> {
  execute(data: Entity): Promise<TModel>;
}
