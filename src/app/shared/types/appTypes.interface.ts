import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { TagStateInterface } from 'src/app/shared/modules/tags/types/TagState.interface';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagStateInterface;
  article: ArticleStateInterface;
}
