import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Proposta extends BaseModel {
  codigo?: string;
  codigoCnpq?: string;
  nome?: string;
  descricao?: string;
  objetivo?: string;
  preRequisito?: string;
  observacao?: string;
  status?: string;
  disciplina?: string;
}
