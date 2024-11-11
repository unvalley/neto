import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export const HomeScreen = ({ pagesMode = false }: { pagesMode?: boolean }) => {
  const linkTarget = '/user'
  const linkProps = useLink({
    href: `${linkTarget}/unvalley`,
  })

  const itemLinkProps = useLink({
    href: '/item/1',
  })

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="$8"
      padding="$4"
      bg="$background"
    >
      <XStack
        pos="absolute"
        width="100%"
        top="$6"
        gap="$6"
        justifyContent="center"
        flexWrap="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && <SwitchThemeButton />}
      </XStack>

      <YStack gap="$4">
        <H1
          textAlign="center"
          col="$color12"
        >
          Home
        </H1>
        <Paragraph
          col="$color10"
          textAlign="center"
        >
          Here's a basic starter to show navigating from one screen to another.
        </Paragraph>
        <Separator />
        <Paragraph textAlign="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
      </YStack>

      <Button {...linkProps}>Link to user</Button>
      <Button {...itemLinkProps}>Link to item</Button>

      <SheetDemo />
    </YStack>
  )
}

const SheetDemo = () => {
  const toast = useToastController()

  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle bg="$gray8" />
        <Sheet.Frame
          alignItems="center"
          justifyContent="center"
          gap="$10"
          bg="$color2"
        >
          <XStack gap="$2">
            <Paragraph textAlign="center">Made by</Paragraph>
            <Anchor
              col="$blue10"
              href="https://twitter.com/natebirdman"
              target="_blank"
            >
              @natebirdman,
            </Anchor>
            <Anchor
              color="$purple10"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
