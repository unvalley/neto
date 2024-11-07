import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/navigation'

export const ItemDetailScreen = ({ id }: { id: string }) => {
  const router = useRouter()
  if (!id) {
    return null
  }
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="$4"
      bg="$background"
    >
      <Paragraph
        textAlign="center"
        fontWeight="700"
        col="$blue10"
      >{`Item ID: ${id}`}</Paragraph>
      <Button
        icon={ChevronLeft}
        onPress={() => router.back()}
      >
        Go Home
      </Button>
    </YStack>
  )
}
