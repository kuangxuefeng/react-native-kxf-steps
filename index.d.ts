declare module 'react-native-kxf-steps' {
  import * as React from 'react';
  import * as ReactNative from 'react-native';

  export interface StepsProps extends ReactNative.ViewProps {
    // colors: (string | number)[];
    // start?: { x: number; y: number };
    // end?: { x: number; y: number };
    // locations?: number[];
    // useAngle?: boolean;
    // angleCenter?: {x: number, y: number};
    // angle?: number;
    stepsTxtColor?: string;
    numVal: number;
    datas: {titles:string[], infos?:string[]};
    orientation: 'horizontal' | 'vertical';
  }

  export class Steps extends React.Component<StepsProps> { }

  export default Steps;
}