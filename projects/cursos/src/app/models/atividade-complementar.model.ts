import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface AtividadeComplementar extends BaseModel {
  nome?: string;
  descricao?: string;
  cargaHorario?: number;
}
