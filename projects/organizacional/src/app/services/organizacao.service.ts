import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Organizacao } from '../models/organizacao.model';
import { Pageable } from '../../../../ensino-commons/src/lib/models/pageable.model';
import { take } from 'rxjs/operators';
import { OrganizacaoSearch } from '../models/organizacao-search.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizacaoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.ORGANIZACIONAL_API}/organizacao`;

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

  findById(id: number): Observable<Organizacao> {
    return this.http.get<any>(`${environment.CURSO_API}/organizacao/${id}`);
  }

  findAll(search: OrganizacaoSearch): Observable<Pageable<Organizacao>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  find(id: number) {
    return this.http.get<Organizacao>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  create(record: Organizacao): Observable<Organizacao> {
    return this.http.post(this.endpoint, record).pipe(take(1)) as Observable<
      Organizacao
    >;
  }

  update(id: number, record: Organizacao) {
    return this.http.put(`${this.endpoint}/${id}`, record).pipe(take(1));
  }

  save(record: Organizacao): any {
    if (record.id) {
      return this.update(record.id, record);
    }
    return this.create(record);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
