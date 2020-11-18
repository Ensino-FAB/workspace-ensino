import { CatalogoSearch } from './../models/catalogo-search.model';
import { Catalogo } from './../models/catalogo.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../../ensino-commons/src/environments/environment';
import { Pageable } from 'projects/ensino-commons/src/lib/models/pageable.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogoCursoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.CURSO_API}/catalogo`;

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

  findById(id: number): Observable<Catalogo> {
    return this.http.get<any>(`${environment.CURSO_API}/catalogo/${id}`);
  }

  /* istanbul ignore next */
  findAll(search: CatalogoSearch): Observable<Pageable<Catalogo>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  // tslint:disable-next-line: typedef
  find(id: number) {
    return this.http.get<Catalogo>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  /* istanbul ignore next */
  create(record: Catalogo): Observable<Catalogo> {
    return this.http.post(this.endpoint, record).pipe(take(1)) as Observable<
      Catalogo
    >;
  }

  // tslint:disable-next-line: typedef
  update(record: Catalogo) {
    return this.http.put(`${this.endpoint}/${record.id}`, record).pipe(take(1));
  }

  save(record: Catalogo): any {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  // tslint:disable-next-line: typedef
  remove(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`).pipe(take(1));
  }
}
