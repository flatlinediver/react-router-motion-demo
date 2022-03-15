import React, { FC } from 'react';
import { useMotionConfig } from '@context/motion-config';
import { Wrapper, Input } from './styled';

export const MotionConfig: FC = () => {
  const { setProp, config } = useMotionConfig();

  return (
    <Wrapper>
      <label htmlFor="stiffness">
        Stiffness: <strong>{config.stiffness}</strong>
      </label>
      <Input
        value={config.stiffness}
        onChange={(e) => setProp({ stiffness: parseInt(e.target.value) })}
        type="range"
        min={120}
        max={500}
        id="stiffness"
      />
      <label htmlFor="damping">
        Damping: <strong>{config.damping}</strong>
      </label>
      <Input
        value={config.damping}
        onChange={(e) => setProp({ damping: parseInt(e.target.value) })}
        type="range"
        min={12}
        max={50}
        id="damping"
      />
    </Wrapper>
  );
};
