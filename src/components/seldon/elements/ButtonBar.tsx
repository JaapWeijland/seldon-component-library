/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { LabelButtonProps } from "../primitives/LabelButton"
import { Frame } from "../frames/Frame"
import { ButtonProps, Button } from "../elements/Button"

export type ButtonBarProps = HTMLAttributes<HTMLDivElement> & {
  buttonProps?: ButtonProps
  buttonLabelButtonProps?: LabelButtonProps
}

export const ButtonBar = ({
  style,
  buttonProps,
  buttonLabelButtonProps,
  ...props
}: ButtonBarProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <Button
        style={{
          backgroundColor: "hsl(0deg 0% 15%)",
          cursor: "pointer",
          borderTopWidth: "0.069rem",
          borderTopStyle: "solid",
          borderTopColor: "hsl(0deg 0% 15%)",
          borderRightWidth: "0.069rem",
          borderRightStyle: "solid",
          borderRightColor: "hsl(0deg 0% 15%)",
          borderBottomWidth: "0.069rem",
          borderBottomStyle: "solid",
          borderBottomColor: "hsl(0deg 0% 15%)",
          borderLeftWidth: "0.069rem",
          borderLeftStyle: "solid",
          borderLeftColor: "hsl(0deg 0% 15%)",
          borderTopRightRadius: "99999px",
          borderBottomRightRadius: "99999px",
          borderBottomLeftRadius: "99999px",
          borderTopLeftRadius: "99999px",
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
        }}
        {...{ ...defaultProps.children.buttonProps, ...buttonProps }}
        labelButtonProps={{
          ...defaultProps.children.buttonLabelButtonProps,
          ...buttonLabelButtonProps,
        }}
      ></Button>
    </Frame>
  )
}
type DefaultProps = {
  component: ButtonBarProps
  children: ButtonBarProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    buttonProps: {
      style: {
        backgroundColor: "hsl(0deg 0% 15%)",
        cursor: "pointer",
        borderTopWidth: "0.069rem",
        borderTopStyle: "solid",
        borderTopColor: "hsl(0deg 0% 15%)",
        borderRightWidth: "0.069rem",
        borderRightStyle: "solid",
        borderRightColor: "hsl(0deg 0% 15%)",
        borderBottomWidth: "0.069rem",
        borderBottomStyle: "solid",
        borderBottomColor: "hsl(0deg 0% 15%)",
        borderLeftWidth: "0.069rem",
        borderLeftStyle: "solid",
        borderLeftColor: "hsl(0deg 0% 15%)",
        borderTopRightRadius: "99999px",
        borderBottomRightRadius: "99999px",
        borderBottomLeftRadius: "99999px",
        borderTopLeftRadius: "99999px",
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
      },
    },
    buttonLabelButtonProps: {
      children: "Label",
      style: {
        color: "hsl(0deg 100% 65%)",
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
  },
}
const defaultStyles: CSSProperties = {
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignSelf: "stretch",
  height: "fit-content",
}
