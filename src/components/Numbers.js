import React from "react";

export default function Numbers(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
  }
  const dos =
    <div>
      <div className="top-left"></div>
      <div className="bottom-right"></div>
    </div>

  const tres =
    <div>
      <div className="top-left"></div>
      <div className="center"></div>
      <div className="bottom-right"></div>
    </div>

  const cuatro =
    <div>
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="bottom-right"></div>
      <div className="bottom-left"></div>
    </div>

  const cinco =
    <div>
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="center"></div>
      <div className="bottom-right"></div>
      <div className="bottom-left"></div>
    </div>

  const seis =
    <div>
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="center-right"></div>
      <div className="center-left"></div>
      <div className="bottom-right"></div>
      <div className="bottom-left"></div>
    </div>




  return (
    <button onClick={props.holdDice} style={styles} className="btn-num">
      {props.value === 1 && <div className="center"></div>}
      {props.value === 2 && dos}
      {props.value === 3 && tres}
      {props.value === 4 && cuatro}
      {props.value === 5 && cinco}
      {props.value === 6 && seis}

    </button>


  )
}