import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  // Importation du tableau postArray
  @Input() postTitre : string;
  @Input() title : string;
  @Input() postContenu : string;
  @Input() postLove : number;
  @Input() postDate : Date;

  // fonction click pour loveIts +1
  onLove() {
    if(this.postLove >= -9999999) {
       this.postLove ++;
       
    }
   } // EOF onLove
   
   // Fonction click pour LoveIts -1
   noLove() {
    this.postLove --;
   } // EOF noLove

   // Colorise les articles en fonction des votes
   colorLove() {
    if(this.postLove > 0) {
      return 'green';
    } else if(this.postLove < 0) {
      return 'red';
    }
   } // EOF colorLove
  constructor() { }

  ngOnInit() {
  }

}
