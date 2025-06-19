import React from 'react'
import { IHomeView } from './types'

export const HomeView: React.FC<IHomeView> = ({ login }) => {
  return <div onClick={login}>index</div>
}
