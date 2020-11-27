import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';
import { TipoOrganizacaoModel } from '../models/tipo-organizacao.model';

export interface Organizacao extends BaseModel {
  nome: string;
  sigla: string;
  cdOrg: string;
  email: string;
  pabx: string;
  homepage: string;
  extinta: string;
  tipo: TipoOrganizacaoModel;
}
