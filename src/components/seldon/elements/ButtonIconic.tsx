/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLButton } from "../native-react/HTML.Button"
import { CSSProperties, ButtonHTMLAttributes } from "react"
import { Icon, IconProps } from "../primitives/Icon"

export interface ButtonIconicProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconProps?: IconProps
}

export function ButtonIconic({
  style,
  iconProps,
  ...props
}: ButtonIconicProps) {
  const styles = { ...seldonStyles, ...style }

  return (
    <HTMLButton style={styles} {...props}>
      <Icon {...{ ...seldon.iconProps, ...iconProps }} />
    </HTMLButton>
  )
}

const seldon: ButtonIconicProps = {
  iconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
}

const seldonStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 15%)",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftColor: "hsl(0deg 0% 15%)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  height: "fit-content",
  padding: "0.5rem",
  borderWidth: "0.069rem",
  borderStyle: "solid",
  borderRadius: "99999px",
}
