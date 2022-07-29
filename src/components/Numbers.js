import React from "react";

export default function Numbers(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
  }
  return (
    <button onClick={props.holdDice} style={styles} className="btn-num">{props.value}</button>
  )
}