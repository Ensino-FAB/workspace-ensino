import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Organizacao extends BaseModel {
  nome: string;
  sigla: string;
}
