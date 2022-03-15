import React, { FC, useEffect } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useThemeMode } from '@context/theme-mode';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import styled from 'styled-components';
import { cta } from '@styles/commonStyles';

const StyledButton = styled(motion.button)`
  ${cta};
`;

export const ThemeToggle: FC = () => {
  const { mode, toggleMode } = useThemeMode();
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const initial = { rotate: 0 };
  const ifShould = (obj = {}) => (shouldReduceMotion ? { type: false } : obj);

  useEffect(() => {
    controls.start({
      opacity: 1,
      rotate: mode === `light` ? -360 : 360,
      transition: ifShould({ type: 'spring', stiffness: 100 }),
    });
  }, [mode]);

  return (
    <StyledButton
      initial={initial}
      animate={controls}
      onClick={() => toggleMode()}
      aria-label="Dark mode"
      role="switch"
      aria-checked={mode === 'dark'}
      name="Dark mode"
    >
      <b className="visually-hidden">{mode === `light` ? `dark mode` : `Light mode`}</b>
      {mode === `light` ? <RiSunFill /> : <RiMoonFill />}
    </StyledButton>
  );
};
