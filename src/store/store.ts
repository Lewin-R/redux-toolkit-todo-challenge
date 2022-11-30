import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchNative,
  useSelector as useSelectorNative,
  TypedUseSelectorHook,
} from 'react-redux';

/*TODO: Configure the store here*/

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatchNative<AppDispatch>();

export type Selector<TResult> = (state: RootState) => TResult;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelectorNative;
