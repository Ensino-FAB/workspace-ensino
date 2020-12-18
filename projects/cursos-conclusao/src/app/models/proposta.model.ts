import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';

export interface Proposta extends BaseModel {
  dtFim?: Date;
  dtInicio?: Date;
  local?: string;
  pessoaList?: [];
  status?: string;
  capacitacao?: CapacitacaoResponse;
  instanciaProcessoId: string;
}

export interface CapacitacaoResponse {
  id?: number;
  codigo?: string;
  nome?: string;
  descricao?: string;
  cargaHorario?: number;
}

export interface PropostaRequest extends BaseModel {
  dtFim?: Date;
  dtInicio?: Date;
  local?: string;
  itens?: ItemPropostaRequest[];
  capacitacaoId?: number;
}

export interface ItemPropostaRequest extends BaseModel {
  pessoaId?: number;
}
