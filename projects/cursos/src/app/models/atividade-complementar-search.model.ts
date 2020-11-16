import { BaseSearch } from './../../../../ensino-commons/src/lib/models/base-search.deprecated.model';

export interface AtividadeComplementarSearch extends BaseSearch {
  nome?: string;
  descricao?: string;
  cargaHorario?: number;
}
