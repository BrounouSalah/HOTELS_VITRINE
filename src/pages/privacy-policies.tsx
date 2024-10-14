import { Header } from "@/components/common/Header/Header";
import { SocialMetaTags } from "@/components/common/SocialMetaTags";
import {
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const PrivacyPolicies = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTopButton && window.pageYOffset > 400) {
        setShowScrollTopButton(true);
      } else if (showScrollTopButton && window.pageYOffset <= 400) {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTopButton]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden ">
      <Header />
      {/* <SocialMetaTags
        currentUrl={`https://www._hotels.com/privacy-policies`}
        title="_HOTELS - Privacy & Policies"
      /> */}
      <Stack spacing={10} mx="auto" maxW="3xl" my="20">
        <Heading as="h1">Privacy Policy for _HOTELS</Heading>

        <p>
          At _HOTELS, accessible from https://www._hotels.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document outlines the types of information that is collected and
          recorded by _HOTELS and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, please do not hesitate to contact us.
        </p>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website concerning the information that they
          shared and/or collected in yourhotels.com. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>

        <Heading>Consent</Heading>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <Heading>Information We Collect</Heading>

        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <p>
          When you register for an Account, we may ask for your contact
          information, including items such as name, hotel name, address, email
          address, and telephone number.
        </p>

        <Heading>How We Use Your Information</Heading>

        <p>We use the information we collect in various ways, including to:</p>

        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <Heading>Log Files</Heading>

        <p>
          _HOTELS follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          as part of hosting services analytics. The information collected by
          log files includes internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </p>

        <Heading>Advertising Partners Privacy Policies</Heading>

        <p>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of _HOTELS.
        </p>

        <p>
          Third-party ad servers or ad networks use technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on _HOTELS, which are sent
          directly to users' browsers. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>

        <p>
          Note that _HOTELS has no access to or control over these cookies that
          are used by third-party advertisers.
        </p>

        <Heading>Third-Party Privacy Policies</Heading>

        <p>
          _HOTELS's Privacy Policy does not apply to other advertisers or
          websites. Thus, we advise you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>

        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </p>

        <Heading>Children's Information</Heading>

        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>

        <p>
          yourhotels.com does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately, and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </Stack>
      {showScrollTopButton && (
        <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
          <IconButton
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            colorScheme="teal"
            size="lg"
            aria-label="Scroll to top"
            boxShadow="lg"
            borderRadius="full"
            bg={useColorModeValue("white", "gray.700")}
            color={useColorModeValue("gray.900", "white")}
          />
        </Box>
      )}
    </div>
  );
};

export default PrivacyPolicies;
