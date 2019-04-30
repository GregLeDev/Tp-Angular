import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP OpenClassroom Systeme de vote';
  // Tableau des posts
  postArray = [
    // Objet [0]
    {
      titre : 'titre1',
      contenu : 'contenu1',
      loveIts :  9,
      created_at : new Date()
    },
    // Objet [1]
    {
      titre : 'titre2',
      contenu : 'contenu2',
      loveIts :  -5,
      created_at : new Date()
    },
    // Objet [2]
    {
      titre : 'titre3',
      contenu : 'contenu3',
      loveIts :  0,
      created_at : new Date()
    }
  ]; // EOF postsArray
} // EOF appComponent
