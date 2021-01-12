import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';

type UseChangeEvent = {
  (update: Dispatch<SetStateAction<T>>): (event: ChangeEvent<HTMLInputElement>) => void
}

// 「use」を使うとHooksがカスタムフックだと認識してくれる
export const useStringChangeEvent: UseChangeEvent<string> = (update) => {
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      update(event.target.value);
    }, [update]
  );
}

export const useNumberChangeEvent: UseChangeEvent<number>= (update) => {
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      update(Number(event.target.value)
    },<div update=""></div>
  );
};