import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from '@/components/ui/drawer';
import { Heading } from '@/components/ui/heading';
import { Icon, CloseIcon } from '@/components/ui/icon';
import { Link } from '@/components/ui';
import { useNavigation } from '@react-navigation/native';
import { Facebook, Instagram, MessageSquare } from 'lucide-react-native';

export function MobileConventionHeader({ showDrawer, setShowDrawer }: { showDrawer: boolean, setShowDrawer : (value: boolean) => void }) {
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
        <DrawerContent className="bg-primary-700">
          <DrawerHeader>
            <Heading size="lg" className="text-[#F0F4F6]">Menu</Heading>
            <DrawerCloseButton>
              <Icon as={CloseIcon} className="stroke-[#F0F4F6]" />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <div>
                <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Convention', { screen: 'ConventionHome' }); setShowDrawer(false);}}>Accueil</Link>
                <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Convention', { screen: 'Activities' }); setShowDrawer(false);}}>Activités</Link>
                <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Convention', { screen: 'InfosPratiques' }); setShowDrawer(false);}}>Infos pratiques</Link>
                <Link className="text-[#F0F4F6] hover:text-secondary-500 transition-colors duration-300 py-4 text-2xl" onPress={() => {navigation.navigate('Home'); setShowDrawer(false);}}>L'association</Link>
                <div className='flex space-x-4'>
                    <Link href="https://www.facebook.com/assojdrhdl" className="py-4 text-2xl" isExternal>
                        <Icon
                        as={Facebook}
                        size="xl"
                        className="stroke-[#F0F4F6] w-5 h-5"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/heraultsdelambert/#" className="py-4 text-2xl" isExternal>
                        <Icon
                        as={Instagram}
                        size="xl"
                        className="stroke-[#F0F4F6] w-5 h-5"
                        />
                    </Link>
                    <Link href="https://discord.com/invite/ezYdJ7RT9k" className="py-4 text-2xl" isExternal>
                        <Icon
                        as={MessageSquare}
                        size="xl"
                        className="stroke-[#F0F4F6] w-5 h-5"
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