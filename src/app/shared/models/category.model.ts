import { IArticle } from './article.model';

export interface ICategoryUrl {
    url: string;
}

export interface ICategoryListing {
    kind: string;
    data: ICategory;
}

export interface ICategory {
    modhash: string;
    dist: number;
    children: Array<IArticle>;
    after: string;
    before: string;
}
