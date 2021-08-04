import React from 'react';
import Marquee from 'react-double-marquee';

export default function BillBoard() {
  return (
    <center><div
    style={{
      width: '350px',
      whiteSpace: 'nowrap'
}}
  >
    <Marquee>
      Welcome to Rolltide Casino
    </Marquee>
  </div></center>
    )
}
