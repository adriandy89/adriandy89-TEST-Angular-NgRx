import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { UserState } from './user.state';

export const selectUserFeatureState = (state: RootState) => state.user;

export const selectDataUser = createSelector(
    selectUserFeatureState,
  (state: UserState) => state.userData
);

export const selectListUser = createSelector(
  selectUserFeatureState,
(state: UserState) => state.users
);

export const selectIDUser = createSelector(
  selectUserFeatureState,
  (state: UserState) => state.selectedID
);

export const selectIsLoadingUser = createSelector(
  selectUserFeatureState,
  (state: UserState) => state.isLoading
);

export const selectIsErrorUser = createSelector(
  selectUserFeatureState,
  (state: UserState) => state.isError
);