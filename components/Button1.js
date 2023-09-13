import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  nextButtonText,
  imageAltText,
  showArrowIcon,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonWidth,
  buttonHeight,
  furtherBackgroundColor,
  arrowIconHeight,
  arrowIconWidth,
  arrowIconTop,
  arrowIconRight,
  arrowIconBottom,
  arrowIconMaxHeight,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("height", buttonHeight),
    };
  }, [buttonPosition, buttonTop, buttonLeft, buttonWidth, buttonHeight]);

  const furtherStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", furtherBackgroundColor),
    };
  }, [furtherBackgroundColor]);

  const arrowIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", arrowIconHeight),
      ...getStyleValue("width", arrowIconWidth),
      ...getStyleValue("top", arrowIconTop),
      ...getStyleValue("right", arrowIconRight),
      ...getStyleValue("bottom", arrowIconBottom),
      ...getStyleValue("maxHeight", arrowIconMaxHeight),
    };
  }, [
    arrowIconHeight,
    arrowIconWidth,
    arrowIconTop,
    arrowIconRight,
    arrowIconBottom,
    arrowIconMaxHeight,
  ]);

  return (
    <View style={[styles.button, buttonStyle]}>
      <View style={[styles.further, furtherStyle]} />
      <Text style={styles.text}>{nextButtonText}</Text>
      {showArrowIcon && (
        <Image
          style={[styles.buttonChild, arrowIconStyle]}
          resizeMode="cover"
          source={imageAltText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  further: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    backgroundColor: "#090a0b",
    opacity: 0.9,
    position: "absolute",
  },
  text: {
    top: "18.95%",
    left: "18.42%",
    fontSize: FontSize.size_53xl,
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  buttonChild: {
    height: "19.25%",
    width: "18.59%",
    top: "40.05%",
    right: "10.84%",
    bottom: "40.7%",
    left: "70.57%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  button: {
    width: 581,
    height: 153,
  },
});

export default Button1;
