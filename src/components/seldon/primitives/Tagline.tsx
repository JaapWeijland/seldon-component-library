/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLHeading5 } from "../native-react/HTML.Heading5"
import { HTMLHeading6 } from "../native-react/HTML.Heading6"
import { HTMLParagraph } from "../native-react/HTML.Paragraph"
import { CSSProperties, HTMLAttributes } from "react"

export interface TaglineProps
  extends HTMLAttributes<
    HTMLHeadingElement | HTMLHeadingElement | HTMLParagraphElement
  > {
  children?: string
  htmlElement?: "h5" | "h6" | "p"
}

export function Tagline({ style, htmlElement, ...props }: TaglineProps) {
  const styles = { ...seldonStyles, ...style }

  switch (htmlElement) {
    case "h5":
      return <HTMLHeading5 style={styles} {...props} />
    case "h6":
      return <HTMLHeading6 style={styles} {...props} />
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
  fontWeight: 500,
  fontSize: "0.75rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  lineClamp: 2,
  WebkitBoxOrient: "vertical",
  boxOrient: "vertical",
}
