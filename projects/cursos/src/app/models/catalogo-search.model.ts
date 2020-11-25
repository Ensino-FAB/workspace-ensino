import { BaseSearch } from 'projects/ensino-commons/src/lib/models/base-search.deprecated.model';

export interface CatalogoSearch extends BaseSearch {
  nome?: string;
  descricao?: string;
}
