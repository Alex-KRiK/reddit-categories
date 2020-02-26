export interface IArticle {
    kind: string;
    data: Array<ArticleData>;
}

export interface ISelectedArticle {
    article: ArticleData;
}

export class ArticleData {
    thumbnail: string;
    url: string;
    created: number;
    coments: number;
    author: string;
    score: number;
    title: string;
    permalink: string;
    name: string;
    selftext: string;
    id?: string;
    saved?: boolean;

    constructor(object: any) {
        if (object) {
            this.thumbnail = object.thumbnail;
            this.url = object.url;
            this.created = object.created * 1000;
            this.coments = object.num_comments;
            this.author = object.author_fullname;
            this.score = object.score;
            this.title = object.title;
            this.permalink = object.permalink;
            this.name = object.name;
            this.selftext = object.selftext;
        }
    }
}
