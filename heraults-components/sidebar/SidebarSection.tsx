import React, { useContext } from "react";
import {
  Box,
  HStack,
  Icon,
  Pressable,
  ChevronRightIcon,
  Text,
  Link,
  LinkText
} from "@/components/ui";
import { ThemeContext } from "@/App";

type SidebarSectionProps = {
  label: string,
  link: string,
  active?: boolean,
};

function scrollToAnchor(targetId: string) {
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }
    const targetPosition = target.getBoundingClientRect().top;
    document.querySelector('#main')?.scrollTo({
        top: 10000,
        behavior: 'smooth'
    });
}

const SidebarSection = React.memo(({active, label, link}: SidebarSectionProps) => {
  return (
    <>
      {/* big screen */}
      <Box className={`px-16 w-full border-b hidden md:flex ${
                    active
                      ? "border-outline-900"
                      : "border-outline-200"
                  }`}>
        <HStack className="items-center justify-end mx-auto w-full">
          <Pressable className="m-2">
            {({ pressed }) => (
              <Link onPress={() => scrollToAnchor(link)} className="md:flex items-center justify-end">
                <LinkText 
                    className={`${
                      pressed
                        ? "text-typography-500"
                        : "text-typography-900"
                    }`}>
                  {label} {'>'}
                </LinkText>
              </Link>
            )}
          </Pressable>
        </HStack>
      </Box>
    </>
  );
});
export default SidebarSection;
