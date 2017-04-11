import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CLassDetails ,Student} from './admission';

import 'rxjs/add/operator/toPromise';





@Injectable()
export class AdmissionService {
    private base_url = 'http://localhost:8000/';

    private get_class = this.base_url + 'admission/get_class/';  // URL to web api
    private save_student = this.base_url + 'api/save_student';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});

    






    constructor(private http: Http) { }

    getClass(): Promise<CLassDetails[]> {
         return this.http.get(this.get_class)
               .toPromise()
               .then(response => response.json().data as CLassDetails[])
               .catch(this.handleError);
    }
    updateStudent(student: Student): Promise<Student> {
        const url = this.save_student;
        return this.http
            .put(url, JSON.stringify(student), {headers: this.headers})
            .toPromise()
            .then(() => student)
            .catch(this.handleError);
}









    private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
  }

}
