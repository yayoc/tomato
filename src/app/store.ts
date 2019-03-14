import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { reducer as settingReducer } from "./modules/setting";
import {
  reducer as logsReducer,
  loadSessionsMiddleware,
  setWorkSessionMiddleware,
  setBreakSessionMiddleware,
  updateWorkSessionNoteMiddleware,
  deleteAllLogsMiddleware
} from "./modules/logs";

const reducer = combineReducers({
  logs: logsReducer,
  setting: settingReducer
});

export const store = createStore(
  reducer,
  applyMiddleware(
    loadSessionsMiddleware as any,
    setWorkSessionMiddleware as any,
    setBreakSessionMiddleware as any,
    updateWorkSessionNoteMiddleware as any,
    deleteAllLogsMiddleware as any,
    logger
  )
);
