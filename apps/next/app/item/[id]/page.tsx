'use client'

import { ItemDetailScreen } from 'app/features/item/detail-screen'
import { useParams } from 'solito/navigation'

export default function Page() {
  const { id } = useParams()
  return <ItemDetailScreen id={id as string} />
}
