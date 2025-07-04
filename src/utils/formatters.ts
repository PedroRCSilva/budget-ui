export const sanitizePrice = (price: string) => {
  const cleanPrefix = price?.replace('R$', '')
  const cleanedValue = cleanPrefix.replace(/[,.]/g, '')
  const numericValue = parseFloat(cleanedValue) / 100
  return numericValue
}

export function formatPrice(value: number, locale: string = 'pt-BR', currency: string = 'BRL'): string {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export function formatDate(date: Date | string, locale: string = 'pt-BR'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString(locale)
}
