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
  loading: boolean = false;
  
  constructor(private llama3ApiService: Llama3Service){
    
  }

  ngOnInit(){
  }

 
  
  askLlama(){
    this.loading = true;
    this.llama3ApiService.get(this.query).subscribe((res: any) => {
      console.log(res); 
      this.result = res.response;
      this.loading = false;
    });

  }
}
