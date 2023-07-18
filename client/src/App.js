import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsScreen from "./screens/ProductsScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Footer } from "./components/Footer";
import { LandingScreen } from "./screens/LandingScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderSuccessScreen from "./screens/OrderSuccessScreen";
import YourOrdersScreen from "./screens/YourOrdersScreen";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<LandingScreen />}></Route>
                        <Route
                            path="/products"
                            element={<ProductsScreen />}
                        ></Route>
                        <Route
                            path="/product/:id"
                            element={<ProductScreen />}
                        ></Route>
                        <Route path="/login" element={<LoginScreen />}></Route>
                        <Route
                            path="/registration"
                            element={<RegistrationScreen />}
                        ></Route>
                        <Route
                            path="/profile"
                            element={<ProfileScreen />}
                        ></Route>
                        <Route path="/cart" element={<CartScreen />}></Route>
                        <Route
                            path="/checkout"
                            element={<CheckoutScreen />}
                        ></Route>
                        <Route
                            path="/order-success"
                            element={<OrderSuccessScreen />}
                        ></Route>
                        <Route
                            path="/your-orders"
                            element={<YourOrdersScreen />}
                        ></Route>
                    </Routes>
                </main>
                <Footer />
            </Router>
        </ChakraProvider>
    );
}

export default App;
