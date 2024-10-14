import { Header } from "@/components/common/Header/Header";
import { SocialMetaTags } from "@/components/common/SocialMetaTags";
import { TextLink } from "@/components/common/TextLink";
import {
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const TermsOfService = () => {
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
      {/* <SocialMetaTags currentUrl={`https://www._hotels.com/terms-of-service`} /> */}
      <Header />
      <Stack spacing={10} mx="auto" maxW="3xl" my="20">
        <Heading as="h1">Website Terms and Conditions of Use</Heading>

        <Heading>1. Terms</Heading>

        <p>
          By accessing this Website, accessible from https://www._hotels.com,
          you are agreeing to be bound by these Website Terms and Conditions of
          Use and agree that you are responsible for compliance with any
          applicable local laws. If you disagree with any of these terms, you
          are prohibited from accessing this site. The materials contained in
          this Website are protected by copyright and trademark law.
        </p>

        <Heading>2. Use License</Heading>

        <p>
          Permission is granted to temporarily download one copy of the
          materials on _HOTELS App's Website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
        </p>

        <ul>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transfer the materials to another person or "mirror" the materials
            on any other server.
          </li>
        </ul>

        <p>
          This will allow _HOTELS App to terminate upon violations of any of
          these restrictions. Upon termination, your viewing right will also be
          terminated and you should destroy any downloaded materials in your
          possession whether in printed or electronic format.
        </p>

        <Heading>3. Disclaimer</Heading>

        <p>
          All the materials on _HOTELS App's Website are provided "as is".
          _HOTELS App makes no warranties, either expressed or implied,
          therefore negates all other warranties. Furthermore, _HOTELS App does
          not make any representations concerning the accuracy or reliability of
          the use of the materials on its Website or otherwise relating to such
          materials or any sites linked to this Website.
        </p>

        <Heading>4. Limitations</Heading>

        <p>
          _HOTELS App or its suppliers will not be held accountable for any
          damages that may arise with the use or inability to use the materials
          on _HOTELS App's Website, even if _HOTELS App or an authorized
          representative of this Website has been notified, orally or in
          writing, of the possibility of such damage. Some jurisdictions do not
          allow limitations on implied warranties or limitations of liability
          for incidental damages, these limitations may not apply to you.
        </p>

        <Heading>5. Revisions and Errata</Heading>

        <p>
          The materials appearing on _HOTELS App's Website may include
          technical, typographical, or photographic errors. _HOTELS App will not
          promise that any of the materials in this Website are accurate,
          complete, or current. _HOTELS App may change the materials contained
          on its Website at any time without notice. _HOTELS App does not make
          any commitment to update the materials.
        </p>

        <Heading>6. Links</Heading>

        <p>
          _HOTELS App has not reviewed all of the sites linked to its Website
          and is not responsible for the contents of any such linked site. The
          presence of any link does not imply endorsement by _HOTELS App of the
          site. The use of any linked website is at the user's own risk.
        </p>

        <Heading>7. Site Terms of Use Modifications</Heading>

        <p>
          _HOTELS App may revise these Terms of Use for its Website at any time
          without prior notice. By using this Website, you are agreeing to be
          bound by the current version of these Terms and Conditions of Use.
        </p>

        <Heading id="prohibition-fraudulent-activities">
          8. Prohibition of Fraudulent Activities
        </Heading>
        <p>
          You agree not to engage in any fraudulent activities on _HOTELS App's
          Website, including but not limited to creating false bookings or using
          deceptive practices for financial gain. _HOTELS App reserves the right
          to take appropriate action, including the termination of any user
          account, if it determines that fraudulent activities are being
          conducted in violation of this provision.
        </p>

        <Heading>9. Your Privacy</Heading>

        <p>
          Please read our{" "}
          <TextLink href={"/privacy-policies"}>Privacy Policy</TextLink>.
        </p>

        <Heading>10. Governing Law</Heading>

        <p>
          Any claim related to _HOTELS App's Website shall be governed by the
          laws of Tunisia without regards to its conflict of law provisions.
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

export default TermsOfService;
