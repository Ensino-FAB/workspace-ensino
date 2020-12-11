import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Proposta extends BaseModel {
  dtfim?: Date;
  dtInicio?: Date;
  local?: string;
  pessoaList?: [];
  status?: string;
  capacitacaoId?: number;
  instanciaProcessoId: string;
}
