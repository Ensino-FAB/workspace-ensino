import { BaseModel } from 'projects/ensino-commons/src/lib/models/base.model';
import { Organizacao } from './organizacao.model';

export interface Pessoa extends BaseModel {
  nrCpf: string;
  nome: string;
  nomeGuerra: string;
  siglaPosto: string;
  siglaEspecialidade: string;
  email: string;
  organizacao: Organizacao;
  organizacaoId?: number;
}
