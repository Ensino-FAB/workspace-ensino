import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CursoSearch } from '../models/curso-search.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../../ensino-commons/src/environments/environment';
import { Curso } from '../models/curso.model';
import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.CURSO_API}/curso`;

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

  findById(id: number): Observable<Curso> {
    return this.http.get<any>(`${environment.CURSO_API}/curso/${id}`);
  }

  /* istanbul ignore next */
  findAll(search: CursoSearch): Observable<Pageable<Curso>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  // tslint:disable-next-line: typedef
  find(id: number) {
    return this.http.get<Curso>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  /* istanbul ignore next */
  create(record: Curso): Observable<Curso> {
    return this.http.post(this.endpoint, record).pipe(take(1)) as Observable<
      Curso
    >;
  }

  // tslint:disable-next-line: typedef
  update(id: number, record: Curso) {
    return this.http.put(`${this.endpoint}/${id}`, record).pipe(take(1));
  }

  save(record: Curso): any {
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
