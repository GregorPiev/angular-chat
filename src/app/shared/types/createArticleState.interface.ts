
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
export interface createArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
