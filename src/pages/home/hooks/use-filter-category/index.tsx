import { MonthEnum } from '@pages/home/view/types'
import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useFilterCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const monthCurrent = useMemo(() => {
    const values = Object.values(MonthEnum)

    const monthFind = values.find(
      value => value.START_DATE === searchParams.get('startDate') && value.END_DATE === searchParams.get('endDate')
    )
    if (!monthFind) return values[new Date().getMonth()]

    return MonthEnum[monthFind.NAME]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      month: monthCurrent
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { filterCategory, monthCurrent }
}
