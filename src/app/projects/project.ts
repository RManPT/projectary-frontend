export interface IProject{
    id: string;
    approvedin: string;
    year: string;
    courseid: number;
    name: string;
    description: string;
    userid: string,
    created: string;
    groupid: number;
}

export class Application{
    groupid: number;
    projectid: number;
}