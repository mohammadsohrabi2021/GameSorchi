"use client"; // this is a client component 
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Script from 'next/script'
import { Html, Main, NextScript, Head } from 'next/document'
import React, { useEffect, useRef } from 'react';
import Game from '@/components/Game';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Game />
    </>

  )
}
