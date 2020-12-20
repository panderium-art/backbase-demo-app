import { configureStore } from '@reduxjs/toolkit';
import transferWidgetReducer from '../features/transferWidget/transferWidgetSlice';
import transactionsWidgetReducer from "../features/transactionsWidget/transactionsWidgetSlice";

export default configureStore({
  reducer: {
    transferWidget: transferWidgetReducer,
    transactionsWidget: transactionsWidgetReducer,
  },
});
