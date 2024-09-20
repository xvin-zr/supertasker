import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './store';
import { useMemo } from 'react';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export function useTasks() {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const loading = useAppSelector((state) => !!state.tasks.loading);
  
  return useMemo(() => [tasks, loading] as const, [tasks, loading]);
}
