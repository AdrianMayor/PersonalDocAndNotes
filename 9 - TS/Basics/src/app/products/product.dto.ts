import { Product } from './product.model';

// DTO (Data Transfer Object). Hay momentos en los que no hacen falta todos los tipos, por lo que podemos obviarlos de la siguien te manera mediante 'Omit< >'

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Pick< > es lo mismo que Omit< > pero al reves, es decir, en vez de excluir u omitir, eligimos los campos que queremos.
type example = Pick<Product, 'color' | 'description'>;

// Partial< > Indica que todos los campos son opcionales y modificara aquellos que les llegue. Para no darle acceso a todo el Product , usamos CreateProductDto ya que en este tipado ya se excluyen los cmapos que no queremos que se puedan modificar
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Mientras que el Partial< > lo deja todo como opcional, el Required< > lo deja todo como obligatorio
type example2 = Required<Product>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
