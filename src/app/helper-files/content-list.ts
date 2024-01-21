import { Content } from "./content-interface";

export class ContentList {
    private contentArray: Content[];
    constructor() {
        this.contentArray = [];
    }
    getContent(): Content[] {
        return this.contentArray;
    }
    add(contentItem: Content): void {
        this.contentArray.push(contentItem);

    }
    numbOfItem(): number {
        return this.contentArray.length;
    }

    htmlOutput(): string {
      let htmlData="";

      this.contentArray.forEach(element=>{
        htmlData +=`<div>
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <img src="${element.imgUrl}"/>
        <h5>${element.creator}</h5>
        <span>${element.type}</span>
        </div>`
      })
        return htmlData;


    }
}