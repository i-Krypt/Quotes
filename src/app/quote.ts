export class Quote {
    public showAuthor: boolean;
    constructor(public id: number, public author: string, public marvel: string, public submitter: string,public upvotes:number,public downvotes:number, public completeDate: Date){
        this.showAuthor=false;
    }
    // id: number;
    // author: string;
    // marvel: string;
   
}
