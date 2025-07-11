/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { SubtitleProps } from "../primitives/Subtitle"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { ButtonProps } from "../elements/Button"
import { ButtonBar, ButtonBarProps } from "../elements/ButtonBar"
import { ButtonIconicProps } from "../elements/ButtonIconic"
import { TextblockAvatarProps } from "../elements/TextblockAvatar"
import {
  TextblockDetails,
  TextblockDetailsProps,
} from "../elements/TextblockDetails"

export interface CardProductVariant01Props extends HTMLAttributes<HTMLElement> {
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTextblockAvatarProps?: TextblockAvatarProps
  textblockDetailsTextblockAvatarTitleProps?: TitleProps
  textblockDetailsTextblockAvatarSubtitleProps?: SubtitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonProps?: ButtonProps
  buttonBarButtonIconProps?: IconProps
  buttonBarButtonLabelButtonProps?: LabelButtonProps
  buttonBarButton1Props?: ButtonProps
  buttonBarButton1IconProps?: IconProps
  buttonBarButton1LabelButtonProps?: LabelButtonProps
  buttonBarButtonIconicProps?: ButtonIconicProps
  buttonBarButtonIconicIconProps?: IconProps
}

export function CardProductVariant01({
  style,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTextblockAvatarProps,
  textblockDetailsTextblockAvatarTitleProps,
  textblockDetailsTextblockAvatarSubtitleProps,
  textblockDetailsDescriptionProps,
  buttonBarProps,
  buttonBarButtonProps,
  buttonBarButtonIconProps,
  buttonBarButtonLabelButtonProps,
  buttonBarButton1Props,
  buttonBarButton1IconProps,
  buttonBarButton1LabelButtonProps,
  buttonBarButtonIconicProps,
  buttonBarButtonIconicIconProps,
  ...props
}: CardProductVariant01Props) {
  const styles = { ...seldonStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <TextblockDetails
        {...{ ...seldon.textblockDetailsProps, ...textblockDetailsProps }}
      />
      <ButtonBar {...{ ...seldon.buttonBarProps, ...buttonBarProps }} />
    </Frame>
  )
}

const seldon: CardProductVariant01Props = {
  textblockDetailsProps: {
    style: {
      borderBottomStyle: "none",
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      alignSelf: "stretch",
      height: "fit-content",
      margin: "1rem",
    },
  },
  textblockDetailsTaglineProps: {
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
  textblockDetailsTextblockAvatarProps: {
    style: {
      borderBottomStyle: "solid",
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
      alignSelf: "stretch",
      height: "fit-content",
    },
  },
  textblockDetailsTextblockAvatarTitleProps: {
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
  textblockDetailsTextblockAvatarSubtitleProps: {
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
  textblockDetailsDescriptionProps: {
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
  buttonBarProps: {
    style: {
      flexWrap: "wrap",
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      width: "fit-content",
      height: "fit-content",
      margin: "1rem",
    },
  },
  buttonBarButtonProps: {
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
  buttonBarButtonIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
  buttonBarButtonLabelButtonProps: {
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
  buttonBarButton1Props: {
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
  buttonBarButton1IconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
  buttonBarButton1LabelButtonProps: {
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
  buttonBarButtonIconicProps: {
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
  buttonBarButtonIconicIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
}

const seldonStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage: "url(public/seldon/background-default-dark.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftColor: "hsl(0deg 0% 15%)",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "auto",
  alignSelf: "stretch",
  height: "fit-content",
  borderWidth: "var(--hairline)",
  borderStyle: "solid",
  borderRadius: "0.5rem",
}
