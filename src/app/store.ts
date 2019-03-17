import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {
  reducer as settingReducer,
  loadSettingMiddleware,
  saveSettingMiddleware
} from "./modules/setting";
import {
  reducer as logsReducer,
  loadSessionsMiddleware,
  setWorkSessionMiddleware,
  setBreakSessionMiddleware,
  updateWorkSessionNoteMiddleware,
  deleteAllLogsMiddleware
} from "./modules/logs";
import {
  reducer as timerReducer,
  startTimerMiddleware,
  stopTimerMiddleware
} from "./modules/timer";

const reducer = combineReducers({
  logs: logsReducer,
  setting: settingReducer,
  timer: timerReducer
});

export const store = createStore(
  reducer,
  applyMiddleware(
    loadSessionsMiddleware as any,
    setWorkSessionMiddleware as any,
    setBreakSessionMiddleware as any,
    updateWorkSessionNoteMiddleware as any,
    deleteAllLogsMiddleware as any,
    loadSettingMiddleware as any,
    saveSettingMiddleware as any,
    startTimerMiddleware as any,
    stopTimerMiddleware as any,
    logger
  )
);
