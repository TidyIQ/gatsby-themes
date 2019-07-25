/**
 * Create state slice
 *
 * See: https://redux-starter-kit.js.org/api/createslice
 */

import { createSlice, PayloadAction } from "redux-starter-kit";
import initialState from "./initialState";
import { ProgressState } from "./initialState/default";

export interface ProgressAction {
  progressType: keyof ProgressState;
}

export interface ErrorAction extends ProgressAction {
  errorMessage: ProgressState[""]["error"]["message"];
  errorDescription: ProgressState[""]["error"]["description"];
}

const { actions, reducer } = createSlice({
  slice: "progress",
  initialState,
  reducers: {
    isError: (state: ProgressState, action: PayloadAction<ErrorAction>) => {
      const { progressType, errorMessage, errorDescription } = action.payload;
      state[progressType].status = "error";
      state[progressType].error.message = errorMessage;
      state[progressType].error.description = errorDescription;
    },
    isLoading: (
      state: ProgressState,
      action: PayloadAction<ProgressAction>
    ) => {
      const { progressType } = action.payload;
      state[progressType].status = "loading";
    },
    isSuccess: (
      state: ProgressState,
      action: PayloadAction<ProgressAction>
    ) => {
      const { progressType } = action.payload;
      state[progressType].status = "success";
    },
    isWaiting: (
      state: ProgressState,
      action: PayloadAction<ProgressAction>
    ) => {
      const { progressType } = action.payload;
      state[progressType].status = "waiting";
    },
    reset: (state: ProgressState, action: PayloadAction<ProgressAction>) => {
      const { progressType } = action.payload;
      state[progressType] = initialState[progressType];
    }
  }
});

export const progressActions = actions;

export default reducer;
