import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from '@/components/ui/drawer';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon, CloseIcon } from '@/components/ui/icon';
import { useState } from 'react';
import { HStack, Link, VStack } from '@/components/ui';
import { useNavigation } from '@react-navigation/native';
import { Facebook, Instagram, MessageSquare } from 'lucide-react-native';
import ToggleMode from './header/ToggleMode';

export function MobileHeader({ showDrawer, setShowDrawer }: { showDrawer: boolean, setShowDrawer : (value: boolean) => void }) {
  const navigation = useNavigation();
  
  return (
    <>
      <Drawer
        isOpen={showDrawer}
        size="md"
        anchor="right"
        onClose={() => {
          setShowDrawer(false);
        }}
        className="h-[100vh]"
      >
        <DrawerBackdrop />
        <DrawerContent className="bg-primary-50">
          <DrawerHeader>
            <Heading size="lg">Menu</Heading>
            <DrawerCloseButton>
              <Icon as={CloseIcon} />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <div>
                <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Home'); setShowDrawer(false);}}>Accueil</Link>
                <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Club'); setShowDrawer(false);}}>Le Club</Link>
                <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Univers', { screen: 'Liste des Univers' }); setShowDrawer(false);}}>Univers</Link>
                <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Ludotheque'); setShowDrawer(false);}}>Ludothèque</Link>
                <Link className="text-primary-700 hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Inscription'); setShowDrawer(false);}}>Convention</Link>
                <div className='flex space-x-4'>
                    <Link href="https://www.facebook.com/assojdrhdl" className="py-4 text-2xl" isExternal>
                        <Icon
                        as={Facebook}
                        size="xl"
                        className="stroke-background-700 w-5 h-5"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/heraultsdelambert/#" className="py-4 text-2xl" isExternal>
                        <Icon
                        as={Instagram}
                        size="xl"
                        className="stroke-background-700 w-5 h-5"
                        />
                    </Link>
                    <Link href="https://discord.com/invite/ezYdJ7RT9k" className="py-4 text-2xl" isExternal>
                        <Icon
                        as={MessageSquare}
                        size="xl"
                        className="stroke-background-700 w-5 h-5"
                        />
                    </Link>
                </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}