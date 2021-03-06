import { Organizacao } from './organizacao.model';
import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface PropostaResponse extends BaseModel {
  dtFim?: any;
  dtInicio?: any;
  local?: string;
  capacitacao?: CapacitacaoResponse;
  instanciaProcessoId: string;
  status?: string;
  itens?: ItemPropostaResponse[];
}

export interface CapacitacaoResponse {
  id?: number;
  codigo?: string;
  nome?: string;
  descricao?: string;
  cargaHorario?: number;
}

export interface ItemPropostaResponse {
  id?: number;
  pessoa?: PessoaResponse;
}

export interface PessoaResponse {
  id?: number;
  nome?: string;
  nrCpf?: string;
  nrOrdem?: string;
  siglaPosto?: string;
  organizacao: Organizacao;
}
