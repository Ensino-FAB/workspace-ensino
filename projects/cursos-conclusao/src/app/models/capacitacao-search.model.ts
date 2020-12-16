import { BaseSearch } from 'projects/ensino-commons/src/lib/models/base-search.deprecated.model';

export interface CapacitacaoSearch extends BaseSearch {
  codigo?: string;
  nome?: string;
}
