import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Dobermann",
      imgUrl: "https://www.zooplus.hu/magazin/wp-content/uploads/2019/01/Dobermann-768x513.jpg",
      content: "The Dobermann, or Doberman Pinscher in the United States and Canada, is a medium-large breed of domestic dog that was originally developed around 1890 by Louis Dobermann, a tax collector from Germany. The Dobermann has a long muzzle. It stands on its pads and is not usually heavy-footed."
    },
    {
      title: "Shiba Inu",
      imgUrl: "https://forkast.news/wp-content/uploads/2022/02/SHIB-1260x879.jpg",
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: "Golden Retriever",
      imgUrl: "https://image.petmd.com/files/2022-06/golden-retriever.jpg",
      content: "The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries."
    },
    {
      title: "Dobermann",
      imgUrl: "https://www.zooplus.hu/magazin/wp-content/uploads/2019/01/Dobermann-768x513.jpg",
      content: "The Dobermann, or Doberman Pinscher in the United States and Canada, is a medium-large breed of domestic dog that was originally developed around 1890 by Louis Dobermann, a tax collector from Germany. The Dobermann has a long muzzle. It stands on its pads and is not usually heavy-footed."
    }
  ]
}
