import { BaseModel } from './base.model';

export interface User extends BaseModel {
  nome: string;
  cpf: string;
  om: string;
  odsa: string;
  omId: string;
  odsaId: string;
  isOdsa: boolean;
  roles?: string[];
}
