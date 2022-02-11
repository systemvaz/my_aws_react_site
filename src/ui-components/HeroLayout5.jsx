/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroLayout5(props) {
  const {
    backgroundImage,
    matrixQuote = "If real is what you can feel, smell, taste and see, then 'real' is simply electrical signals interpreted by your brain.",
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="1440px"
        height="496px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={backgroundImage}
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,85.00004053115845,102.00000151991844,1)"
        lineHeight="41.33333969116211px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.8099999999999999px"
        width="750px"
        height="86px"
        position="absolute"
        top="0px"
        left="665px"
        padding="0px 0px 0px 0px"
        children={matrixQuote}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,85.00004053115845,102.00000151991844,1)"
        fontStyle="italic"
        lineHeight="33.7525520324707px"
        textAlign="right"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        width="250px"
        height="33px"
        position="absolute"
        top="76px"
        left="1165px"
        padding="0px 0px 0px 0px"
        children="Morpheus, The Matrix"
        {...getOverrideProps(overrides, "View.Text[1]")}
      ></Text>
    </View>
  );
}
