import {
  useCallback,
  useRef,
  useState,
  MouseEvent,
  TouchEvent,
  MouseEventHandler,
} from 'react';

export type TargetType =
  | MouseEvent['currentTarget']
  | TouchEvent['currentTarget'];

export const useLongPress = (
  onLongPress: (eventTarget: TargetType) => void,
  onClick: MouseEventHandler,
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<number>();
  const target = useRef<TargetType>();

  const start = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (shouldPreventDefault && event.currentTarget) {
        event.currentTarget.addEventListener(
          'touchend',
          (preventDefault as unknown) as EventListener,
          {
            passive: false,
          }
        );
        target.current = event.currentTarget;
      }
      timeout.current = setTimeout(() => {
        if (target.current) {
          // need to use saved event.currentTarget due to event changing
          // to incorrect before calling onLongPress with it
          onLongPress(target.current);
        }
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event: MouseEvent | TouchEvent, shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current);
      if (!isTouchEvent(event)) {
        shouldTriggerClick && !longPressTriggered && onClick(event);
        setLongPressTriggered(false);
        if (shouldPreventDefault && target.current) {
          target.current.removeEventListener(
            'touchend',
            (preventDefault as unknown) as EventListener
          );
        }
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e: MouseEvent) => start(e),
    onMouseUp: (e: MouseEvent) => clear(e),
    onMouseLeave: (e: MouseEvent) => clear(e, false),
    onTouchStart: (e: TouchEvent) => start(e),
    onTouchEnd: (e: TouchEvent) => clear(e),
  };
};

const isTouchEvent = (event: TouchEvent | MouseEvent): event is TouchEvent => {
  return (event as TouchEvent).touches !== undefined;
};

const preventDefault = (event: TouchEvent | MouseEvent) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};
