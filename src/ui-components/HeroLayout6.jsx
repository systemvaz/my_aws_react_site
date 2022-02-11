/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout6(props) {
  const {
    imageSrc,
    topTxt,
    middleTxt,
    bottomTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    buttonTxt = "Find Out More",
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Image[0]": { shrink: "0" },
        "Flex.Flex[0]": {},
        "Flex.Flex[1].Flex[0].Text[0]": {
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
        },
        "Flex.Flex[1].Flex[0].Flex[0].Text[0]": {
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
        },
        "Flex.Flex[1].Flex[0].Flex[0].Text[1]": {
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
        },
        "Flex.Flex[1].Flex[0].Flex[0]": {},
        "Flex.Flex[1].Flex[0].Button[0]": {},
        "Flex.Flex[1].Flex[0]": {},
        "Flex.Flex[1]": { backgroundColor: "rgba(255,255,255,1)" },
        Flex: { height: "564px" },
      },
      variantValues: { mode: "Light" },
    },
    {
      overrides: {
        "Flex.Flex[0].Image[0]": {},
        "Flex.Flex[0]": {},
        "Flex.Flex[1].Flex[0].Text[0]": {},
        "Flex.Flex[1].Flex[0].Flex[0].Text[0]": {},
        "Flex.Flex[1].Flex[0].Flex[0].Text[1]": {},
        "Flex.Flex[1].Flex[0].Flex[0]": {},
        "Flex.Flex[1].Flex[0].Button[0]": {},
        "Flex.Flex[1].Flex[0]": {},
        "Flex.Flex[1]": {},
        Flex: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="564px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Image
          width="720px"
          height="564px"
          grow="1"
          basis="564px"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          src={imageSrc}
          {...getOverrideProps(overrides, "Flex.Flex[0].Image[0]")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        height="564px"
        alignItems="flex-start"
        grow="1"
        basis="720px"
        alignSelf="stretch"
        overflow="hidden"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Flex.Flex[1]")}
      >
        <Flex
          gap="24px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.49px"
            width="480px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children={topTxt}
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Text[0]")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="40px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="48px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="480px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children={middleTxt}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.010000000000000009px"
              width="480px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children={bottomTxt}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[1].Flex[0].Flex[0].Text[1]"
              )}
            ></Text>
          </Flex>
          <Button
            display="flex"
            shrink="0"
            width="206px"
            size="large"
            variation="primary"
            children={buttonTxt}
            {...getOverrideProps(overrides, "Flex.Flex[1].Flex[0].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
