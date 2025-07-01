import { MonthEnum } from '@pages/home/view/types'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useFilterCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filterCategory = ({ month, page, size }: { month?: MonthEnum; page?: number; size?: number }) => {
    const queryParams = new URLSearchParams(searchParams.toString())
    if (month) {
      queryParams.set('startDate', month.START_DATE)
      queryParams.set('endDate', month.END_DATE)
    }
    if (page) queryParams.set('page', page.toString())
    if (size) queryParams.set('size', size.toString())

    setSearchParams(queryParams)
  }

  useEffect(() => {
    filterCategory({
      month: MonthEnum.JUNE,
      page: 0,
      size: 10
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { filterCategory }
}
