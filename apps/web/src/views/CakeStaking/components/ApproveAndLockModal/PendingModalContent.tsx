import { AutoColumn, Box, ColumnCenter, Spinner, Text } from '@iguanadex/uikit'

interface ApproveModalContentProps {
  title: string
  subTitle?: React.ReactNode
}

export const PendingModalContent: React.FC<ApproveModalContentProps> = ({ title, subTitle }) => {
  return (
    <Box width="100%">
      <Box mb="16px">
        <ColumnCenter>
          <Spinner />
        </ColumnCenter>
      </Box>
      <AutoColumn gap="12px" justify="center">
        <Text bold textAlign="center">
          {title}
        </Text>
        {subTitle}
      </AutoColumn>
    </Box>
  )
}
