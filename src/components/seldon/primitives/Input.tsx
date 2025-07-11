/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLInput } from "../native-react/HTML.Input"
import { CSSProperties, HTMLAttributes } from "react"

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  inputType?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
}

export function Input({ style, ...props }: InputProps) {
  const styles = { ...seldonStyles, ...style }

  return <HTMLInput style={styles} {...props} />
}

const seldonStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  borderTopColor: "hsl(0deg 4% 56%)",
  borderRightColor: "hsl(0deg 4% 56%)",
  borderBottomColor: "hsl(0deg 4% 56%)",
  borderLeftColor: "hsl(0deg 4% 56%)",
  color: "hsl(0deg 4% 8%)",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  padding: "0.5rem",
  borderWidth: "0.069rem",
  borderStyle: "solid",
  borderRadius: "0.25rem",
}
