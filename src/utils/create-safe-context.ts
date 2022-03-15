import React from 'react';

export function createSafeContext<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useSafeContext must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}
