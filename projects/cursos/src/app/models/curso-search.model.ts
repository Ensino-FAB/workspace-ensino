import { BaseSearch } from 'projects/ensino-commons/src/lib/models/base-search.deprecated.model';

export interface CursoSearch extends BaseSearch {
  codigo?: string;
  codigoCnpq?: string;
  nome?: string;
}
