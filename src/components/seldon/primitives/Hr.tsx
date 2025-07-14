/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLHr } from "../native-react/HTML.Hr"
import { CSSProperties, HTMLAttributes } from "react"

export interface HrProps extends HTMLAttributes<HTMLHRElement> {}

export function Hr({ style, ...props }: HrProps) {
  const styles = { ...seldonStyles, ...style }

  return <HTMLHr style={styles} {...props} />
}

const seldonStyles: CSSProperties = {}
