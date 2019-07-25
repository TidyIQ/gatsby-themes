/**
 * Define default initial state
 */

export interface ProgressState {
  [key: string]: {
    error: {
      message: string;
      description: string;
    };
    status: "waiting" | "loading" | "success" | "error";
  };
}

const defaultProgressState: ProgressState = {};

export default defaultProgressState;
