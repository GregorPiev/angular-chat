import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/GetFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}
