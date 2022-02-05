/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
  }

declare module '*.jpg' {
  const content: any; // you can also set this to string
  export default content;
}

declare module '*.svg' {
  const content: any; // you can also set this to string
  export default content;
}

declare module 'react-vertical-timeline-component';
//declare module 'react-loading-screen';
declare module 'websocket';
declare module 'video-react';
declare module 'react-sound';
