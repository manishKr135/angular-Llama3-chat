import { Component } from '@angular/core';
import { Llama3Service } from 'src/app/services/llama3.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  query: string = '';
  result: string = '';
  constructor(private llama3ApiService: Llama3Service){

  }

  ngOnInit(){
  
  }

  askLlama(){
    this.llama3ApiService.get(this.query).subscribe((res: any) => {
      this.result = res.response;
    });
  }
}
