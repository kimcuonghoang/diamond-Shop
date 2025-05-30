import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
import User from "../pages/admin/User";
import ProductAdd from "../pages/admin/ProductAdd";
import ProductEdit from "../pages/admin/ProductEdit";
import ProductDetail from "./../pages/admin/ProductDetail";

const adminRoutes = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "product", element: <Product /> },
  { path: "product/add", element: <ProductAdd /> },
  { path: "product/:id", element: <ProductDetail /> },
  { path: "product/edit/:id", element: <ProductEdit /> },

  { path: "user", element: <User /> },
];

export default adminRoutes;
