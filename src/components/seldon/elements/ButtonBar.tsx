/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { Frame } from "../frames/Frame"
import { Button, ButtonProps } from "../elements/Button"
import { ButtonIconic, ButtonIconicProps } from "../elements/ButtonIconic"

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
  buttonProps?: ButtonProps
  buttonIconProps?: IconProps
  buttonLabelButtonProps?: LabelButtonProps
  buttonIconicProps?: ButtonIconicProps
  buttonIconicIconProps?: IconProps
}

export function ButtonBar({
  style,
  buttonProps,
  buttonIconProps,
  buttonLabelButtonProps,
  buttonIconicProps,
  buttonIconicIconProps,
  ...props
}: ButtonBarProps) {
  const styles = { ...seldonStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Button {...{ ...seldon.buttonProps, ...buttonProps }} />
      <ButtonIconic
        {...{ ...seldon.buttonIconicProps, ...buttonIconicProps }}
      />
    </Frame>
  )
}

const seldon: ButtonBarProps = {
  buttonProps: {
    style: {
      backgroundColor: "hsl(0deg 0% 15%)",
      cursor: "pointer",
      borderTopColor: "hsl(0deg 0% 15%)",
      borderRightColor: "hsl(0deg 0% 15%)",
      borderBottomColor: "hsl(0deg 0% 15%)",
      borderLeftColor: "hsl(0deg 0% 15%)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      paddingTop: "0.5rem",
      paddingRight: "0.875rem",
      paddingBottom: "0.5rem",
      paddingLeft: "0.75rem",
      width: "fit-content",
      height: "fit-content",
      borderWidth: "0.069rem",
      borderStyle: "solid",
      borderRadius: "99999px",
    },
  },
  buttonIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
  buttonLabelButtonProps: {
    children: "Label",
    htmlElement: "span",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 500,
      fontSize: "0.8rem",
      lineHeight: 1.15,
      letterSpacing: "0.1px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
  buttonIconicProps: {
    style: {
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
    },
  },
  buttonIconicIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
}

const seldonStyles: CSSProperties = {
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignSelf: "stretch",
  height: "fit-content",
}
