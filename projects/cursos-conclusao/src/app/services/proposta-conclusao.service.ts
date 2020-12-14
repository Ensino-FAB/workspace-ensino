import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pageable } from '../../../../ensino-commons/src/lib/models/pageable.model';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Proposta } from '../models/proposta.model';
import { PropostaConclusaoSearch } from '../models/proposta-conclusao-search.model';
@Injectable({
  providedIn: 'root',
})
export class PropostaConclusaoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.CURSOS_CONCLUSAO_API}/proposta`;

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
    return this.http.get<any>(
      `${environment.CURSOS_CONCLUSAO_API}/proposta/${id}`
    );
  }

  findAll(search: PropostaConclusaoSearch): Observable<Pageable<Proposta>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  find(id: number) {
    return this.http.get<Proposta>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  create(record: Proposta): Observable<Proposta> {
    return this.http.post(this.endpoint, record).pipe(take(1)) as Observable<
      Proposta
    >;
  }

  update(id: number, record: Proposta) {
    return this.http.put(`${this.endpoint}/${id}`, record).pipe(take(1));
  }

  public save(record: Proposta): any {
    if (record.id) {
      return this.update(record.id, record);
    }
    return this.create(record);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
