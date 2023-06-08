import { useEffect, useState } from 'react';

export default function useDerivedState(initialValue, derivedValue) {
  // We have to call this no matter what, but we only use it if value is local state
  const [stateValue, setStateValue] = useState(initialValue);
  const [isDerived, setIsDerived] = useState(derivedValue !== undefined);

  // A component can move from local to derived state, but never derived to local state. Ideally this should
  // never happen, but it's easy to see a scenario where someone passes a value from an uninitialized useState call, so
  // I thought it was prudent to support this scenario. We also reset stateValue to initialValue to remove any
  // lingering state modifications.
  useEffect(() => {
    // if derivedValue isn't undefined, it means we need to move to derived state
    if (!isDerived && derivedValue !== undefined) {
      setIsDerived(true);
      setStateValue(initialValue);
    }
  }, [derivedValue, isDerived, initialValue]);

  function noopUpdater() {
    /* not using noop util here as we don't want a return value */
  }

  const value = isDerived ? derivedValue : stateValue;
  const updater = isDerived ? noopUpdater : setStateValue;

  return [value, updater, isDerived];
}
