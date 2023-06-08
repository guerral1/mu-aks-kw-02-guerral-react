const PX_REM_RATIO = 0.0625;

export const rem = (px) => `${px * PX_REM_RATIO}rem`;

// min-width breakpoints for common devices
export const BREAKPOINTS = {
  // These will be removed in v4
  PHONE_PORTRAIT_MED: 375,
  PHONE_PORTRAIT_LG: 576,
  DESKTOP_SM: 1024,
  DESKTOP_HD: 1600,
  MAX_768: 767.98,
  MAX_1024: 1023.98,
  MAX_1280: 1279.98,
  MAX_1600: 1599.98,
  // These are go forward
  PHONE_PORTRAIT_SM: 320,
  TABLET_PORTRAIT: 768,
  DESKTOP_MED: 1280,
  DESKTOP_LG: 1440,
  DESKTOP_XL: 1920,
};

/**
 * A no-operation identity function that returns its inputs
 * @param  {...any} rest
 */
export const noop = (...rest) => [...rest];

/**
 * Generate a function which provides an event object being emitted
 * from an interactive component to a user-provided handler.
 * This helps to keep the signature of each handler consistent.
 * @param {function} handler - user-provided event handler.
 */
export const handle = (handler = noop) => {
  return (event, customValue) => {
    let value;
    if (customValue !== undefined) {
      value = customValue;
    } else if (event && event.target) {
      value =
        event.target.type === "checkbox" || event.target.type === "radio"
          ? event.target.checked
          : event.target.value;
    } else {
      // event is undefined, no value to pass
    }
    return handler(value, event);
  };
};
