export class SearchQuery
{
    constructor(public source : string , public destination : string , public date : string)
    {}

    public queryBuilder() : string
    {
        return this.source+"/"+this.destination+"/"+this.date;
    }
}