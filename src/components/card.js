import React from 'react';
import { RiLock2Line, RiLockUnlockLine, RiTreasureMapLine } from 'react-icons/ri';

const Card = props => {
  return (
    <button
      style={{
        background: props.unlocked > 0 ? '#98CE00' : props.unlocked === 0 ? '#6CCFF6' : '#757780'
      }}
      onClick={()=>{props.displayDirections(props.recipe, props.unlocked)}}
    >
      {props.unlocked > 0 ? <RiTreasureMapLine /> : props.unlocked === 0 ? <RiLockUnlockLine /> : <RiLock2Line />}
      {props.title}
    </button>
  )
}

export default Card;
