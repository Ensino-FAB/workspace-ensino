import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'projects/ensino-commons/src/public-api';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ConclusaoCursoResponse } from '../models/conclusao-curso-response.model';
import { ConclusaoCursoRequest } from '../models/conclusao-curso-request.model';
import { ConclusaoCursoSearch } from '../models/conclusao-curso-search.model';

@Injectable({
  providedIn: 'root',
})
export class ConclusaoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.CURSOS_CONCLUSAO_API}/conclusao`;

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

  findById(id: number): Observable<ConclusaoCursoResponse> {
    return this.http.get<any>(`${this.endpoint}/${id}`);
  }

  findAll(
    search: ConclusaoCursoSearch
  ): Observable<Pageable<ConclusaoCursoResponse>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  find(id: number) {
    return this.http
      .get<ConclusaoCursoResponse>(`${this.endpoint}/${id}`)
      .pipe(take(1));
  }

  create(data: ConclusaoCursoRequest): Observable<ConclusaoCursoRequest> {
    return this.http
      .post<ConclusaoCursoRequest>(this.endpoint, data)
      .pipe(take(1));
  }

  update(data: ConclusaoCursoRequest) {
    return this.http
      .put<ConclusaoCursoRequest>(`${this.endpoint}/${data.id}`, data)
      .pipe(take(1));
  }

  save(data: ConclusaoCursoRequest): any {
    if (data.id) {
      return this.update(data);
    }
    return this.create(data);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
