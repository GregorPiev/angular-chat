import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { TagStateInterface } from 'src/app/shared/modules/tags/types/TagState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagStateInterface;
}
