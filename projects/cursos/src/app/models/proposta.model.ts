import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Proposta extends BaseModel {
  codigoCnpq?: string;
  objetivo?: string;
  preRequisito?: string;
  observacao?: string;
  disciplina?: string;
}
