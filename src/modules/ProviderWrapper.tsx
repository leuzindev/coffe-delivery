'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/index'
interface ProvidersWrapperProps {
  children: ReactNode
}

export function ProvidersWrapper({ children }: ProvidersWrapperProps) {
  return <Provider store={store}>{children}</Provider>
}
