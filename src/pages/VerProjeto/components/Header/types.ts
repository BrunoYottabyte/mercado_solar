interface IHeader {
  id: string
  client_name: string
  client_email: string
  client_phone: string
  client_postal_code: string
  client_type: 'pf' | 'pj'
  average_consumption?: number
  address: string
  // month_consumption: number
}

export type { IHeader }