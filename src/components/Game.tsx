import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import { startGame } from '../../public/index'
import backgroundImage from '../../public/spelunky.jpg'
type Props = {}

const Game = (props: Props) => {
  useEffect(() => {
    startGame();
  }, []);
  const styling = {
    width: '100%',
    height: 'auto',
    border: '1px solid black',
    backgroundImage: `url('${backgroundImage.src}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  const styleButton = {
    width: '100px',
    height: '60px',
    marginBottom: '5px',
  }
  return (
    <>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div style={{
          height: '90vh',
          maxWidth: '400px',
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          alignSelf: 'center',
          border: '2px dashed violet',
          borderRadius: '30px',
          overflow: 'hidden',
          backgroundColor: 'rgba(89, 5, 128, 0.6)'
        }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ fontSize: '22px', color: '#fff', fontWeight: 'bold' }}>سکه یاب</h3>
          </div>
          <div >
            <canvas id="canvas" width="450" height="300" style={styling}></canvas>
          </div>

          <br /><br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button style={styleButton} id="up">↑</button><br />
            </div>
            <div>
              <button style={styleButton} id="left">←</button>
              <button style={styleButton} id="down">↓</button>
              <button style={styleButton} id="right">→</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Game