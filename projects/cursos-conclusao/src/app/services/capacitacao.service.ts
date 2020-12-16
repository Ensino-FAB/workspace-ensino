import { Capacitacao } from '../models/capacitacao.model';
import { CapacitacaoSearch } from '../models/capacitacao-search.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pageable } from 'projects/ensino-commons/src/public-api';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CapacitacaoService {
  constructor(protected http: HttpClient) {}

  private endpoint = `${environment.CURSOS_CONCLUSAO_API}/capacitacao`;

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

  findAll(search: CapacitacaoSearch): Observable<Pageable<Capacitacao>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<any>(this.endpoint, {
      params,
    });
  }

  find(id: number) {
    return this.http.get<Capacitacao>(`${this.endpoint}/${id}`).pipe(take(1));
  }
}
