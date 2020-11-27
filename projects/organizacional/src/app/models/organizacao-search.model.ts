import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';
import { TipoOrganizacaoModel } from './tipo-organizacao.model';

export interface Organizacao extends BaseModel {
  nome?: string;
  sigla?: string;
  extinta?: string;
  tipo?: TipoOrganizacaoModel;
}
