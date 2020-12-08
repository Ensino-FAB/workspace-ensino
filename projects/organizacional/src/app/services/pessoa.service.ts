import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'projects/ensino-commons/src/public-api';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PessoaSearch } from '../models/pessoa-search.model';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.ORGANIZACIONAL_API}/pessoa`;

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

  findById(id: number): Observable<Pessoa> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }

  findAll(search: PessoaSearch): Observable<Pageable<Pessoa>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  find(id: number) {
    return this.http.get<Pessoa>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  create(data: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.endpoint, data).pipe(take(1));
  }

  update(data: Pessoa) {
    return this.http
      .put<Pessoa>(`${this.endpoint}/${data.id}`, data)
      .pipe(take(1));
  }

  save(data: Pessoa): any {
    if (data.id) {
      return this.update(data);
    }
    return this.create(data);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
