/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, IconNotifications, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { logoSrc, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="103px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="144px"
        height="102px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={logoSrc}
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        gap="37.2529296875px"
        direction="row"
        width="428px"
        alignItems="center"
        shrink="0"
        height="27.15998649597168px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18.106657028198242px"
          fontWeight="500"
          color="rgba(0,63.750030398368835,76.50000303983688,1)"
          lineHeight="27.15998649597168px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.031066570281982425px"
          width="68.546630859375px"
          height="27.15998649597168px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Home"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18.106657028198242px"
          fontWeight="500"
          color="rgba(0,63.750030398368835,76.50000303983688,1)"
          lineHeight="27.15998649597168px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.031066570281982425px"
          width="111.87327575683594px"
          height="27.15998649597168px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="About Me"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18.106657028198242px"
          fontWeight="500"
          color="rgba(0,63.750030398368835,76.50000303983688,1)"
          lineHeight="27.15998649597168px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.031066570281982425px"
          width="61.43330001831055px"
          height="27.15998649597168px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Code"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[2]")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18.106657028198242px"
          fontWeight="500"
          color="rgba(0,63.750030398368835,76.50000303983688,1)"
          lineHeight="27.15998649597168px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.031066570281982425px"
          width="69.8399658203125px"
          height="27.15998649597168px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Tunes"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[3]")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="764px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="764px"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <IconNotifications
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          color="rgba(51.00000075995922,51.00000075995922,51.00000075995922,1)"
          type="notifications"
          fontSize="24px"
          {...getOverrideProps(overrides, "Flex.Flex[1].IconNotifications[0]")}
        ></IconNotifications>
      </Flex>
    </Flex>
  );
}
