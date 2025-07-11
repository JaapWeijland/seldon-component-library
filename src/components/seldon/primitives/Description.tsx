/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLParagraph } from "../native-react/HTML.Paragraph"
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export interface DescriptionProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  children?: string
  htmlElement?: "p" | "span"
}

export function Description({
  style,
  htmlElement,
  ...props
}: DescriptionProps) {
  const styles = { ...seldonStyles, ...style }

  switch (htmlElement) {
    case "span":
      return <HTMLSpan style={styles} {...props} />
    default:
      return <HTMLParagraph style={styles} {...props} />
  }
}

const seldonStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
}
