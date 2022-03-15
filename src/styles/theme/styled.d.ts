import { CSSProp } from 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ReturnType<typeof theme> {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp<DefaultTheme> | CSSObject;
  }
}
