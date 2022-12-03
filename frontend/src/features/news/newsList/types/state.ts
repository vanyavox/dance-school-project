import News from './News';

export interface State {
    news: News[],
}

export type Action =
| { type: 'news', payload: News[] };
