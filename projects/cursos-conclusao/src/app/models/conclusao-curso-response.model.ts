import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface ConclusaoCursoResponse extends BaseModel {
  dtfim?: any;
  dtInicio?: any;
  local?: string;
  capacitacaoResponse?: CapacitacaoResponse;
  pessoaResponse?: PessoaResponse;
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
