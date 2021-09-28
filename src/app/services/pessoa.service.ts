import { Pessoa } from './../models/pessoa';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class PessoaService {
    private baseUrl = "http://localhost:5000/api/pessoa";

    constructor(private http: HttpClient) {}

    list(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.baseUrl}/list`);
    }

    getById(id: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.baseUrl}/getbyid/${id}`);
    }

    create(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(`${this.baseUrl}/create`, pessoa);
    }
}
