import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Icon,
    Text,
    useDisclosure,
    Button,
    Stack,
    useColorModeValue,
    useColorMode,
    useToast,
    MenuButton,
    MenuDivider,
    Menu,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon,
    ChevronDownIcon,
} from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";
import {
    MdLocalShipping,
    MdLogout,
    MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const links = [
    { linkName: "Products", path: "/products" },
    { linkName: "ShoppingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
    <Link
        as={ReactLink}
        to={path}
        px={2}
        py={2}
        rounded="md"
        _hover={{
            textDecorationLine: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
    >
        {children}
    </Link>
);

const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [isHovering, setIsHovering] = useState(false);
    const user = useSelector((state) => state.user);
    const { userInfo } = user;
    const dispatch = useDispatch();
    const toast = useToast();

    const logoutHandler = () => {
        dispatch(logout());
        toast({
            description: "You have been logged out.",
            status: "success",
            isClosable: true,
        });
    };

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack>
                    <Link
                        as={ReactLink}
                        to="/"
                        style={{ textDecoration: "none" }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Flex alignItems="center">
                            <Icon
                                as={GiTechnoHeart}
                                h={6}
                                w={6}
                                color={isHovering ? "cyan.400" : "orange.400"}
                            />
                            <Text fontWeight="extrabold">Tech Lines</Text>
                        </Flex>
                    </Link>
                    <HStack
                        as="nav"
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {links.map((link) => (
                            <NavLink key={link.linkName} path={link.path}>
                                {link.linkName}
                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems="center">
                    <NavLink>
                        <Icon
                            as={colorMode === "light" ? MoonIcon : SunIcon}
                            alignItems="center"
                            onClick={() => toggleColorMode()}
                        />
                    </NavLink>

                    {userInfo ? (
                        <Menu>
                            <MenuButton
                                px="4"
                                py="2"
                                transition="all 0.3s"
                                as={Button}
                            >
                                {userInfo.name} <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={ReactLink} to="/profile">
                                    <CgProfile />
                                    <Text ml="2">Profile</Text>
                                </MenuItem>
                                <MenuItem as={ReactLink} to="/your-orders">
                                    <MdLocalShipping />
                                    <Text ml="2">Your Orders</Text>
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={logoutHandler}>
                                    <MdLogout />
                                    <Text ml="2">Logout</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    ) : (
                        <>
                            {" "}
                            <Button
                                as={ReactLink}
                                to="/login"
                                px={2}
                                fontSize="sm"
                                fontWeight={400}
                                variant="link"
                            >
                                Sing in
                            </Button>
                            <Button
                                as={ReactLink}
                                to="/registration"
                                m={2}
                                display={{ base: "none", md: "inline-flex" }}
                                fontSize="sm"
                                fontWeight={600}
                                _hover={{ bg: "orange.400" }}
                                bg="orange.500"
                                color="white"
                            >
                                Sing up
                            </Button>
                        </>
                    )}
                </Flex>
            </Flex>
            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as="nav" spacing={4}>
                        {links.map((link) => (
                            <NavLink key={link.linkName} path={link.path}>
                                {link.linkName}
                            </NavLink>
                        ))}
                        <NavLink key="sign up" path="/registration">
                            Sign Up
                        </NavLink>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
