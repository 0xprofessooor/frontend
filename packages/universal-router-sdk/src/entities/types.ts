import { PermitSingle } from '@iguanadex/permit2-sdk'
import { BigintIsh } from '@iguanadex/sdk'
import { SwapOptions } from '@iguanadex/smart-router'
import { Address } from 'viem'

export interface Permit2Signature extends PermitSingle {
  signature: `0x${string}`
}

export type SwapRouterConfig = {
  sender?: Address // address
  deadline?: BigintIsh | undefined
}

export type FlatFeeOptions = {
  amount: BigintIsh
  recipient: Address
}

export type PancakeSwapOptions = Omit<SwapOptions, 'inputTokenPermit'> & {
  inputTokenPermit?: Permit2Signature
  flatFee?: FlatFeeOptions
}
