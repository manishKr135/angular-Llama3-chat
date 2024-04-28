import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Llama3Service {

  constructor(private httpClient: HttpClient) {
    
  }

  get(prompt: string) {
   return this.httpClient.post('http://localhost:11434/api/generate', 
     {
         "model": "llama3", 
         "prompt": prompt,
         "stream": false
     },
     {responseType: 'json' }
   );
 }
}
