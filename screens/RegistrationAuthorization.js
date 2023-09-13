import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Button1 from "../components/Button1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RegistrationAuthorization = () => {
  return (
    <View style={styles.registrationAuthorization}>
      <Image
        style={[styles.image6Icon, styles.circlePosition]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <View
        style={[styles.buttonauthorization, styles.buttonregistrationLayout]}
      >
        <Button1
          nextButtonText=" АВТОРИЗАЦИЯ"
          imageAltText={require("../assets/arrow-1.png")}
          showArrowIcon={false}
          buttonPosition="absolute"
          buttonTop={0}
          buttonLeft={0}
          buttonWidth={904}
          buttonHeight={153}
          furtherBackgroundColor="#000"
          arrowIconHeight={0}
          arrowIconWidth="18.24%"
          arrowIconTop="49.67%"
          arrowIconRight="11.19%"
          arrowIconBottom="unset"
          arrowIconMaxHeight="unset"
        />
      </View>
      <View
        style={[styles.buttonregistration, styles.buttonregistrationLayout]}
      >
        <Button1
          imageAltText={require("../assets/arrow-1.png")}
          showArrowIcon={false}
          buttonPosition="absolute"
          buttonTop={0}
          buttonLeft={0}
          buttonWidth={904}
          buttonHeight={153}
          furtherBackgroundColor="#000"
          arrowIconHeight={0}
          arrowIconWidth="18.24%"
          arrowIconTop="49.67%"
          arrowIconRight="11.19%"
          arrowIconBottom="unset"
          arrowIconMaxHeight="unset"
        />
        <Text style={styles.registration}>РЕГИСТРАЦИЯ</Text>
      </View>
      <Image
        style={[styles.twitter1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/twitter-1.png")}
      />
      <Image
        style={[styles.facebookIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/facebook.png")}
      />
      <Image
        style={styles.googleIcon}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
      <View style={[styles.pridelogo, styles.circleLayout]}>
        <View style={[styles.circle, styles.circleLayout]} />
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circlePosition: {
    left: 0,
    top: 0,
  },
  buttonregistrationLayout: {
    height: 153,
    width: 904,
    left: 268,
    position: "absolute",
  },
  iconLayout: {
    height: 138,
    width: 138,
    top: 2278,
    position: "absolute",
  },
  circleLayout: {
    height: 1516,
    width: 1516,
    position: "absolute",
  },
  image6Icon: {
    width: 1440,
    position: "absolute",
    height: 2560,
  },
  buttonauthorization: {
    top: 2009,
  },
  registration: {
    top: 32,
    left: 202,
    fontSize: FontSize.size_53xl,
    fontFamily: FontFamily.centuryGothic,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  buttonregistration: {
    top: 1788,
  },
  twitter1Icon: {
    left: 965,
  },
  facebookIcon: {
    marginLeft: -69,
    left: "50%",
  },
  googleIcon: {
    left: 336,
    width: 139,
    height: 140,
    top: 2278,
    position: "absolute",
  },
  circle: {
    borderRadius: 817,
    backgroundColor: Color.bleackstrong,
    opacity: 0.4,
    left: 0,
    top: 0,
  },
  logoIcon: {
    top: 160,
    left: 160,
    width: 1197,
    height: 1197,
    position: "absolute",
  },
  pridelogo: {
    top: 80,
    left: -38,
  },
  registrationAuthorization: {
    backgroundColor: "#25282d",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 2560,
  },
});

export default RegistrationAuthorization;
