import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface PropostaResponse extends BaseModel {
  dtfim?: any;
  dtInicio?: any;
  local?: string;
  capacitacao?: CapacitacaoResponse;
  instanciaProcessoId: string;
  status?: string;
  pessoas?: PessoaResponse[];
}

export interface CapacitacaoResponse {
  id?: number;
  codigo?: string;
  nome?: string;
  descricao?: string;
  cargaHorario?: number;
}

export interface PessoaResponse {
  id?: number;
  nome?: string;
  nrCpf?: string;
  nrOrdem?: string;
}
