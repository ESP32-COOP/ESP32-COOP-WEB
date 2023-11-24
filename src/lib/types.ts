export type Categories = 'test1'  | 'tes2';


export type Blog ={
    title: string;
    slug:string;
    description: string;
    date: string;
    categories : Categories[];
    published: boolean;
}