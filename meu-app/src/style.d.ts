// styled-components.d.ts

import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'style' {
  export interface MainTitleProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    // Defina as propriedades específicas do seu componente 'mainTitle' aqui, se necessário
  }

  export const mainTitle: React.FC<MainTitleProps>;
}
