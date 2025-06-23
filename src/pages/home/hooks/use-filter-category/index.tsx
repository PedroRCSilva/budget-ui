import { MonthEnum } from '@pages/home/view/types'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useFilterCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filterCategory = React.useCallback(
    ({ month = MonthEnum.JUNE, page = 0, size = 30 }: { month?: MonthEnum; page?: number; size?: number }) => {
      const queryParams = new URLSearchParams(searchParams.toString())

      queryParams.set('month', month.toString())
      queryParams.set('page', page.toString())
      queryParams.set('size', size.toString())

      setSearchParams(queryParams)
    },
    [searchParams, setSearchParams]
  )

  useEffect(() => {
    filterCategory({})
  }, [filterCategory])

  return { filterCategory }
}
