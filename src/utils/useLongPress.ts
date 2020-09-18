import {
  useCallback,
  useRef,
  useState,
  MouseEvent,
  TouchEvent,
  MouseEventHandler,
} from 'react';

export const useLongPress = (
  onLongPress: (e: MouseEvent | TouchEvent) => void,
  onClick: MouseEventHandler,
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<number>();
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener(
          'touchend',
          (preventDefault as unknown) as EventListener,
          {
            passive: false,
          }
        );
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
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
