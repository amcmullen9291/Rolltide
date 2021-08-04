import React from 'react';
import Marquee from 'react-double-marquee';

export default function BillBoard() {
  return (
    <center><div
    style={{
      "width": "250px",
      whiteSpace: 'nowrap',
      color: 'crimson',
      "fontSize": "24px"
}}
  >
    <Marquee>
      Rolltide Casino
    </Marquee>
  </div></center>
    )
}
