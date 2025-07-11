/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { IconDefault } from "../icons/IconDefault"
import { CSSProperties, SVGAttributes } from "react"

export interface IconProps extends SVGAttributes<SVGElement> {
  icon?: "__default__"
}

export function Icon({ style, icon = "__default__", ...props }: IconProps) {
  const styles = { ...seldonStyles, ...style }

  const Icon = iconMap[icon || "__default__"]
  return <Icon style={styles} {...props} />
}

const seldonStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  fontSize: "1rem",
}
const iconMap = { __default__: IconDefault }
