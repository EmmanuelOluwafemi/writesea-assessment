/* eslint-disable @typescript-eslint/no-explicit-any */
interface ChakraIconProps {
    color?: string;
    boxSize?: string | number;
    size?: string | number;
    [key: string]: any; // Only for additional props, core props are typed
  }
  
  export type IconComponent = React.ComponentType<ChakraIconProps>;