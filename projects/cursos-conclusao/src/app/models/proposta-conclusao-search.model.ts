import { BaseSearch } from 'projects/ensino-commons/src/lib/models/base-search.deprecated.model';

export interface PropostaConclusaoSearch extends BaseSearch {
  codigoCnpq?: string;
  objetivo?: string;
  preRequisito?: string;
  observacao?: string;
  disciplina?: string;
  status?: string;
}
