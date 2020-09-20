import React from 'react';
// import Disclaimer from './disclaimer';
import LeftDrawer from './left-drawer';
import Note from './note';

export default function Main(props: any) {
  return (
    <>
      <LeftDrawer />
      <Note />
    </>
  );
}
