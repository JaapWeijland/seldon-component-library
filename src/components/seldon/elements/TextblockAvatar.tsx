/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { Subtitle, SubtitleProps } from "../primitives/Subtitle"
import { Title, TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"

export interface TextblockAvatarProps extends HTMLAttributes<HTMLElement> {
  titleProps?: TitleProps
  subtitleProps?: SubtitleProps
}

export function TextblockAvatar({
  style,
  titleProps,
  subtitleProps,
  ...props
}: TextblockAvatarProps) {
  const styles = { ...seldonStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Title {...{ ...seldon.titleProps, ...titleProps }} />
      <Subtitle {...{ ...seldon.subtitleProps, ...subtitleProps }} />
    </Frame>
  )
}

const seldon: TextblockAvatarProps = {
  titleProps: {
    children: "Full Name",
    htmlElement: "h4",
    style: {
      color: "hsl(0deg 4% 8%)",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.25,
      whiteSpace: "normal",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      lineClamp: 2,
      WebkitBoxOrient: "vertical",
      boxOrient: "vertical",
    },
  },
  subtitleProps: {
    children: "Personal details",
    htmlElement: "h5",
    style: {
      color: "hsl(0deg 0% 30%)",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.25,
      whiteSpace: "normal",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      lineClamp: 3,
      WebkitBoxOrient: "vertical",
      boxOrient: "vertical",
    },
  },
}

const seldonStyles: CSSProperties = {
  borderBottomStyle: "solid",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  alignSelf: "stretch",
  height: "fit-content",
}
