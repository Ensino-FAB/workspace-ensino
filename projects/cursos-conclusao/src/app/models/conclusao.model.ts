import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Conclusao extends BaseModel {
  dtInicio?: string;
  dtFim?: string;
  pessoaId?: string;
  local?: string;
  capacitacaoId?: string;
}
