import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface ConclusaoCursoRequest extends BaseModel {
  dtFim?: Date;
  dtInicio?: Date;
  local?: string;
  pessoaList?: [];
  capacitacaoId?: number;
}
