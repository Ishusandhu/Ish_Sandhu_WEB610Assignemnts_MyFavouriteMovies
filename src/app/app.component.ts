import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from "./content-list/content-list.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ContentCardComponent, ContentListComponent,FormsModule]
})
export class AppComponent {
  title = 'Ish_Sandhu_MyFavouriteMovies';

}
