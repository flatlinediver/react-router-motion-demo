import React, { FC } from 'react';
import { useMotionConfig } from '@context/motion-config';
import { IRoute } from '@constants/routes';
import { StaggeredMotion, spring } from 'react-motion';
import { Wrapper, Dots, Dot, StylesType } from './styled';

const defaultStyles: StylesType[] = Array.from(Array(6)).map(() => ({ x: -50, s: 0.9, o: 0 }));

export const Card: FC<{ status: string } & IRoute> = ({ status }) => {
  const { config } = useMotionConfig();
  const hasEntered = status === `entered` ? true : false;
  const isExiting = status === `exiting` ? true : false;
  return (
    <Wrapper>
      <StaggeredMotion
        defaultStyles={defaultStyles}
        styles={(prev) =>
          (prev || []).map((_, i) => {
            return i === 0
              ? {
                  x: spring(isExiting ? 50 : hasEntered ? 0 : -50, config),
                  s: spring(hasEntered ? 1 : 0.9, config),
                  o: spring(hasEntered ? 1 : 0, config),
                }
              : {
                  x: spring((prev || [])[i - 1].x, config),
                  s: spring((prev || [])[i - 1].s, config),
                  o: spring((prev || [])[i - 1].o, config),
                };
          })
        }
      >
        {(styles: StylesType[]) => (
          <>
            <Dots>
              {styles.map((s, i) => (
                <Dot
                  key={i}
                  style={
                    s && {
                      transform: `translateX(${s.x}px) scale(${s.s})`,
                      opacity: `${s.o}`,
                    }
                  }
                />
              ))}
            </Dots>
          </>
        )}
      </StaggeredMotion>
    </Wrapper>
  );
};
