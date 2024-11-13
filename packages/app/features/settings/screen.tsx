import { YStack, ListItem, Text, H2 } from 'tamagui'

export const SettingsScreen = () => {
  return (
    <YStack
      flex={1}
      justifyContent="flex-start"
      gap="$4"
      padding="$4"
      bg="$background"
    >
      {/* TODO: Header */}
      <H2
        textAlign="left"
        col="$color12"
      >
        Settings
      </H2>

      <YStack>
        <Text
          fontSize="$5"
          fontWeight="600"
          marginBottom="$2"
        >
          Preferences
        </Text>
        <YStack gap="$3">
          <ListItem title="Appearances" />
          <ListItem title="Language" />
        </YStack>
      </YStack>

      <YStack>
        <Text
          fontSize="$5"
          fontWeight="600"
          marginBottom="$2"
        >
          About
        </Text>
        <YStack gap="$3">
          <ListItem title="Privacy policy" />
          <ListItem title="Terms of service" />
        </YStack>
      </YStack>
    </YStack>
  )
}
