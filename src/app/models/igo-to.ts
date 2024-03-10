export interface IGoTo {
    ShortURL: string;
    ExpandedURL: string;
    RelatedTerms: string[];
    TimesVisited: number;
    FavoritedBy: number[];
    CreatedById: number;
    CreatedOn: Date;
    LastModifiedById: number;
    LastModifiedOn: Date;
}
