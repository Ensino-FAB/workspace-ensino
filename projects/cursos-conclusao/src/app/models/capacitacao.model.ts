import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Capacitacao extends BaseModel {
  id: number;
  codigo?: string;
  nome?: string;
  descricao?: string;
  cargaHoraria?: number;
}
