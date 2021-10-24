import React from 'react'
import { classNames } from '../shared/Utils'

interface children{
    children : any
    className : any
}

export function Button({ children, className, ...rest } : children) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}
interface children{
    children : any
    className : any
}


export function PageButton({ children, className, ...rest } : children) {
  return (
    <button
      type="button"
      className={
        classNames(
          "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
          className
        )}
      {...rest}
    >
      {children}
    </button>
  )
}
