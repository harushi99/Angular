

export class Flower{
  id:number;
  name: string;
  image:string;
  author:string;
  words:string;
  shares :number;

  constructor(id:number,
    name: string,
    image:string,
    author:string,
    words:string,
    shares :number){
    this.id=id;
    this.author=author;
    this.name=name;
    this.image=image;
    this.shares=shares;
    this.words=words;
  }
}