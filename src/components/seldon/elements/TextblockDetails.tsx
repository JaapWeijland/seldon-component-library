/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { Description, DescriptionProps } from "../primitives/Description"
import { Tagline, TaglineProps } from "../primitives/Tagline"
import { Title, TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"

export interface TextblockDetailsProps extends HTMLAttributes<HTMLElement> {
  taglineProps?: TaglineProps
  titleProps?: TitleProps
  descriptionProps?: DescriptionProps
}

export function TextblockDetails({
  style,
  taglineProps,
  titleProps,
  descriptionProps,
  ...props
}: TextblockDetailsProps) {
  const styles = { ...seldonStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Tagline {...{ ...seldon.taglineProps, ...taglineProps }} />
      <Title {...{ ...seldon.titleProps, ...titleProps }} />
      <Description {...{ ...seldon.descriptionProps, ...descriptionProps }} />
    </Frame>
  )
}

const seldon: TextblockDetailsProps = {
  taglineProps: {
    children: "Tagline",
    htmlElement: "p",
    style: {
      color: "hsl(0deg 4% 98%)",
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
    },
  },
  titleProps: {
    children: "Product Card Title",
    htmlElement: "h4",
    style: {
      color: "hsl(0deg 4% 98%)",
      marginBottom: "1rem",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 600,
      fontSize: "2.002rem",
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
  descriptionProps: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus. Donec euismod in fringilla.",
    htmlElement: "p",
    style: {
      color: "hsl(0deg 4% 98%)",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: 1.25,
      whiteSpace: "normal",
    },
  },
}

const seldonStyles: CSSProperties = {
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
}
