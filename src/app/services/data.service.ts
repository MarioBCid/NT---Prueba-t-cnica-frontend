import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { getAttributeListUrl, getDigimonListUrl, getDigimonUrl, getFieldListUrl, getLevelListUrl } from './apiUrls';
import { DetailedDigimon, DigimonResponse, FieldResponse, SingleField, searchProps } from '../Interfaces/digimon.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(id: number): Observable<DetailedDigimon> { return this.get(getDigimonUrl + id); }

  getLevelList(): Observable<FieldResponse> { return this.get(getLevelListUrl); }

  getFieldList(): Observable<FieldResponse> { return this.get(getFieldListUrl); }

  getAttributeList(): Observable<FieldResponse> { return this.get(getAttributeListUrl); }

  getItem(url: string): Observable<SingleField> { return this.http.get<SingleField>(url); }

  getDigimonList(params: searchProps): Observable<DigimonResponse> {
    const { digimonName, attribute, level, elements, page } = params;
    let url = getDigimonListUrl;

    if (digimonName) url = `${url}${digimonName}`;
    if (attribute) url = `${url}&attribute=${attribute}`;
    if (level) url = `${url}&level=${level}`;
    if (elements) url = `${url}&pageSize=${elements}`;
    if (page) url = `${url}&page=${page}`;

    return this.http.get<any>(url);
  }

  get(url: string) {
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}