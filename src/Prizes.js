import React from "react";  
import Prize from './Prize';

export default function Prizes(props) {
  return (
    <Prize
      onClick={() => console.log('onClick')}
      src=''
      aspectRatio={(16/9)}
    />
  )
}
