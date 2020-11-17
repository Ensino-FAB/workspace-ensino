import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Catalogo extends BaseModel {
  nome?: string;
  descricao?: string;
}
