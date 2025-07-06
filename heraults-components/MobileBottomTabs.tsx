import React from "react";
import { HStack, Icon, Link, Pressable, Text, VStack } from "../components/ui";

const MobileBottomTabs = ({ bottomTabs, activeTab, setActiveTab }: any) => {

  return (
    <>
      <HStack className="content-center absolute bottom-0 justify-between w-full py-3 px-6 md:hidden">
        {bottomTabs.map((tab: any) => {
          return (
            <Pressable
              key={tab.label}
              onPress={() => {
                setActiveTab(tab.label);
              }}
              disabled={tab.disabled}
              //@ts-ignore
              opacity={tab.disabled ? 0.5 : 1}
            >
              <Link href={tab.href}>
                <VStack className="items-center">
                  <Icon
                    as={tab.icon}
                    size="md"
                    className={`${
                      activeTab === tab.label
                        ? "text-typography-900"
                        : "text-typography-400"
                    }`}
                  />
                  <Text
                    size="xs"
                    className={`${
                      activeTab === tab.label
                        ? "text-typography-900"
                        : "text-typography-400"
                    }`}
                  >
                    {tab.label}
                  </Text>
                </VStack>
              </Link>
            </Pressable>
          );
        })}
      </HStack>
    </>
  );
};

export default MobileBottomTabs;
