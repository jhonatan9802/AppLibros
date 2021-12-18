import { Component } from '@angular/core';
import { LibrosService } from './services/libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AppLibros';
  public libros: Array<any> = [];

  constructor(private libroService: LibrosService) {
    this.libroService.GetLibros().subscribe((res: any) => {
      console.log(res);
      this.libros = res;
    });
  }
}
