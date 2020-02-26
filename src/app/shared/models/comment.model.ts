export interface IComment {
    kind: string;
    data: CommentData;
}

export interface IRepliesData {
    modhash: string;
    dist: number;
    children: Array<IComment>;
    after: string;
    before: string;
}

export interface Replies {
    kind: string;
    data: IRepliesData;
}


export class CommentData {
    author: string;
    created: number;
    body: string;
    comments: Array<CommentData> = [];
    replies?: Replies;

    constructor(object: any) {
        if (object) {
            this.author = object.author;
            this.created = object.created * 1000;
            this.body = object.body;

            this.getNestedComments(this, object.replies);
        }
    }

    getNestedComments(comments: any, nestedReplies: Replies): void {
        if (nestedReplies) {
            nestedReplies.data.children.forEach((comment: IComment) => {
                const data = {
                    author: comment.data.author,
                    created: comment.data.created * 1000,
                    body: comment.data.body,
                    replies: comment.data.replies,
                    comments: []
                };
                comments.comments.push(data);
                this.getNestedComments(data, data.replies);
            });
        }
    }
}
