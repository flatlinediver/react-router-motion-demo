import React, { useState, FC } from 'react';
import { createSafeContext } from '@utils/create-safe-context';
import { SpringHelperConfig } from 'react-motion';

export interface IMotionConfig {
  config: SpringHelperConfig;
  setProp: (prop: IMotionConfig['config']) => void;
}

const [MotionConfig, Provider] = createSafeContext<IMotionConfig>();

export const MotionConfigProvider: FC = ({ children }) => {
  const [config, setConfig] = useState<IMotionConfig['config']>({ stiffness: 470, damping: 25 });

  const setProp: IMotionConfig['setProp'] = (prop) => {
    setConfig({ ...config, ...prop });
  };

  return (
    <Provider
      value={{
        config,
        setProp,
      }}
    >
      {children}
    </Provider>
  );
};

export const useMotionConfig = MotionConfig;
