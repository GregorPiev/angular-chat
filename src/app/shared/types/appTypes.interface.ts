import { AuthStateInterface } from '../../auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { TagStateInterface } from 'src/app/shared/modules/tags/types/TagState.interface';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { createArticleStateInterface } from 'src/app/shared/types/createArticleState.interface';
import { editArticleStateInterface } from 'src/app/shared/types/editArticleState.interface';
import { SettingsStateInterface } from 'src/app/settings/types/settingsState.interface';
import { UserProfileStateInterface } from './../../userProfile/types/userProfileState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagStateInterface;
  article: ArticleStateInterface;
  createArticle: createArticleStateInterface;
  editArticle: editArticleStateInterface;
  settings: SettingsStateInterface;
  userProfile: UserProfileStateInterface;
}
