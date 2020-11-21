import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../ensino-commons/src/environments/environment';
import { Observable } from 'rxjs';
import { Pageable } from '../../../../ensino-commons/src/lib/models/pageable.model';
import { take } from 'rxjs/operators';
import { Proposta } from '../models/proposta.model';
import { PropostaSearch } from '../models/proposta-search.model';
import { Curso } from '../models/curso.model';
import { AtividadeComplementar } from '../models/atividade-complementar.model';

@Injectable({
  providedIn: 'root',
})
export class PropostaCursoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.CURSO_API}/proposta`;

  /* istanbul ignore next */
  removeEmptyFields(data): void {
    Object.keys(data).forEach(
      (key) =>
        (data[key] === null ||
          data[key] === '' ||
          data[key] === undefined ||
          data[key].length === 0) &&
        delete data[key]
    );
  }

  findById(id: number): Observable<Proposta> {
    return this.http.get<any>(`${environment.CURSO_API}/proposta/${id}`);
  }

  /* istanbul ignore next */
  findAll(search: PropostaSearch): Observable<Pageable<Proposta>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  // tslint:disable-next-line: typedef
  find(id: number) {
    return this.http.get<Proposta>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  /* istanbul ignore next */
  create(record: Proposta): Observable<Proposta> {
    return this.http.post(this.endpoint, record).pipe(take(1)) as Observable<
      Proposta
    >;
  }

  // tslint:disable-next-line: typedef
  update(id: number, record: Proposta) {
    return this.http.put(`${this.endpoint}/${id}`, record).pipe(take(1));
  }

  save(record: Proposta): any {
    if (record.id) {
      return this.update(record.id, record);
    }
    return this.create(record);
  }

  // tslint:disable-next-line: typedef
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
