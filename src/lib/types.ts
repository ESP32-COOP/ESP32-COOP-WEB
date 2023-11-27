export type Categories = 'english'  | 'setup' | 'français' | 
                'documentation' | 'guide' | 'goal' | 'news' | 'white paper' | 'other' | 'dev blog' |
                'explanation' ;


export type Blog ={
    title: string;
    slug:string;
    description: string;
    date: string;
    categories : Categories[];
    published: boolean;
}