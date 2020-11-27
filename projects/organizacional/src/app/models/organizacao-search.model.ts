import { TipoOrganizacaoModel } from './tipo-organizacao.model';
import { BaseSearch } from '../../../../ensino-commons/src/lib/models/base-search.deprecated.model';

export interface OrganizacaoSearch extends BaseSearch {
  nome?: string;
  sigla?: string;
  extinta?: string;
  tipo?: TipoOrganizacaoModel;
}
