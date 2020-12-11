import { BaseSearch } from '../../../../ensino-commons/src/lib/models/base-search.deprecated.model';

export interface ConclusaoCursoSearch extends BaseSearch {
  dtfim?: Date;
  dtInicio?: Date;
  local?: string;
  pessoaList?: [];
  capacitacaoId?: number;
}
