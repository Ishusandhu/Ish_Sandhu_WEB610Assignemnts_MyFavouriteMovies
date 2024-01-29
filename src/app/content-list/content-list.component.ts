import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentCardComponent,CommonModule]
})
export class ContentListComponent {
indianMovies: Content[] = [
    {
      id: 1,
      title: "Dangal",
      description: "A biographical sports drama film based on the life of the Phogat sisters.",
      creator: "Nitesh Tiwari",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Dangal_Poster.jpg/220px-Dangal_Poster.jpg",
      type: "Movie",
      tags: ["Biography", "Sports", "Drama"]
    },
    {
      id: 2,
      title: "Bahubali: The Beginning",
      description: "An epic historical fiction film that follows the story of Shivudu.",
      creator: "S.S. Rajamouli",
     
      type: "Movie",
      tags: ["Epic", "Action", "Adventure"]
    },
    {
      id: 3,
      title: "Lagaan",
      description: "A sports drama set in the Victorian period during the British Raj in India.",
      creator: "Ashutosh Gowariker",
      imgUrl: "https://cdn.siasat.com/wp-content/uploads/2021/06/lagaan-1024x768.jpg",
      type: "Movie",
      tags: ["Drama", "Sports", "Period"]
    },
    {
      id: 4,
      title: "3 Idiots",
      description: "A coming-of-age comedy-drama film about three engineering students and their adventures.",
      creator: "Rajkumar Hirani",
      imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMyOTg0ODQ1OF5BMl5BanBnXkFtZTcwNjc0NTMwNQ@@._V1_.jpg",
      type: "Movie",
      tags: ["Comedy", "Drama", "Coming-of-age"]
    },
    {
      id: 5,
      title: "Padmaavat",
      description: "A historical drama based on the epic poem 'Padmavat' by Malik Muhammad Jayasi.",
      creator: "Sanjay Leela Bhansali",
      imgUrl: "https://th.bing.com/th/id/OIP.kCL1UoZV0x3X-lhTfPMovwHaE3?rs=1&pid=ImgDetMain",
      type: "Movie",
      tags: ["Historical", "Drama", "Romance"]
    },
    {
      id: 6,
      title: "Koi Mil Gaya",
      description: "A science fiction film about an intellectually disabled boy who befriends an alien.",
      creator: "Rakesh Roshan",
      imgUrl: "https://th.bing.com/th/id/R.4e8cf373b42d09bbc2a5275deb265936?rik=ErDwGxo9ebikmQ&pid=ImgRaw&r=0",
      type: "Movie",
      tags: ["Science Fiction", "Drama", "Adventure"]
    }
  ];

}
