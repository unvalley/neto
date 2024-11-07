import { Stack } from 'expo-router'
import { useParams } from 'solito/navigation'
import { ItemDetailScreen } from 'app/features/item/detail-screen'

export default function Screen() {
  const { id } = useParams()
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Item',
          presentation: 'modal',
          animation: 'slide_from_right',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <ItemDetailScreen id={id as string} />
    </>
  )
}
