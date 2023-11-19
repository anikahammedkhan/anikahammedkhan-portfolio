import React from 'react'
import styles from './../../../styles/OrbitComponent.module.scss'
import profile from './profile.png'
import react from './../../../Assets/icons/react.png'
import nextjs from './../../../Assets/icons/nextjs.png'
import nodejs from './../../../Assets/icons/nodejs.png'
import redux from './../../../Assets/icons/redux.png'
import js from './../../../Assets/icons/js.png'
import ts from './../../../Assets/icons/ts.png'
import aws from './../../../Assets/icons/aws.png'
import docker from './../../../Assets/icons/docker.png'
import express from './../../../Assets/icons/express.png'
import graphql from './../../../Assets/icons/graphql.png'
import jest from './../../../Assets/icons/jest.png'
import mongodb from './../../../Assets/icons/mongodb.png'
import postgress from './../../../Assets/icons/postgress.png'
import prisma from './../../../Assets/icons/prisma.png'
import sql from './../../../Assets/icons/sql.png'
import Image from 'next/image'

const OrbitComponent = () => {
  return (
    <div className={styles.orbit}>
      <div className={styles.orbitWrap}>
        <li className={styles.orbitCenter}>
          <Image
            src={profile}
            alt='Orbit Icon'
            className={`${styles.orbitCenterIcon} ${styles.counterClockwiseRotate}`}
          />
        </li>
        <li>
          <ul className={`${styles.ring} ${styles.ring0}`}>
            <li>
              <Image
                src={aws}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={docker}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={express}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={graphql}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={jest}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={mongodb}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={postgress}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={prisma}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={sql}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
          </ul>
        </li>
        <li>
          <ul className={`${styles.ring} ${styles.ring1}`}>
            <li>
              <Image
                src={react}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={nodejs}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={nextjs}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={redux}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={ts}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
            <li>
              <Image
                src={js}
                alt='Orbit Icon'
                className={`${styles.orbitIcon} ${styles.counterClockwiseRotate}`}
              />
            </li>
          </ul>
        </li>
      </div>
    </div>
  )
}

export default OrbitComponent
