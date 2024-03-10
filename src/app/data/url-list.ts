import { IGoTo } from "../models/igo-to";

export const URLs: IGoTo[] = [
    {
        ShortURL: 'goog',
        ExpandedURL: 'http://www.google.com',
        RelatedTerms: ['search', 'search engine', 'knowledge'],
        TimesVisited: 15,
        FavoritedBy: [1],
        CreatedById: 1,
        CreatedOn: new Date(2021, 10, 3),
        LastModifiedById: 1,
        LastModifiedOn: new Date(2021, 11, 3)
    },
    {
        ShortURL: 'fb',
        ExpandedURL: 'http://www.facebook.com',
        RelatedTerms: ['social', 'social media', 'posts'],
        TimesVisited: 0,
        FavoritedBy: [],
        CreatedById: 1,
        CreatedOn: new Date(2021, 10, 3),
        LastModifiedById: 1,
        LastModifiedOn: new Date(2021, 10, 3)
    },
    {
        ShortURL: 'twit',
        ExpandedURL: 'http://www.twitter.com',
        RelatedTerms: ['social', 'social media', 'messaging platform', 'tweets'],
        TimesVisited: 1,
        FavoritedBy: [],
        CreatedById: 1,
        CreatedOn: new Date(2021, 10, 3),
        LastModifiedById: 1,
        LastModifiedOn: new Date(2021, 10, 3)
    },
    {
        ShortURL: 'quora',
        ExpandedURL: 'http://www.quora.com',
        RelatedTerms: ['social', 'knowledge', 'q&a', 'questions', 'answers'],
        TimesVisited: 5,
        FavoritedBy: [1],
        CreatedById: 1,
        CreatedOn: new Date(2021, 10, 3),
        LastModifiedById: 1,
        LastModifiedOn: new Date(2021, 11, 3)
    },
    {
        ShortURL: 'reddit',
        ExpandedURL: 'http://www.reddit.com',
        RelatedTerms: ['social', 'news aggregation', 'content rating', 'discussion', 'posts'],
        TimesVisited: 35,
        FavoritedBy: [1],
        CreatedById: 1,
        CreatedOn: new Date(2021, 10, 3),
        LastModifiedById: 1,
        LastModifiedOn: new Date(2021, 11, 3)
    }
];