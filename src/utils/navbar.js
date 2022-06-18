// components
import AddNewPage from "../pages/AddNew";
import MyPropertiesPage from "../pages/Generic";
import Generic from "../pages/Generic";
import HomePage from "../pages/Home";
import Login from "../pages/SignIn";
import PropertiesPage from "../pages/Properties";
import SelectedHousePage from "../pages/SelectedHouse";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <HomePage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <PropertiesPage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 5,
    title: "Selected House",
    path: "/properties/:id",
    Element: <SelectedHousePage />,
    hidden: true,
    param: true,
    private: false,
  },
  {
    id: 3,
    title: "Login",
    path: "/login",
    Element: <Login />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 4,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 6,
    title: "My Properties",
    path: "/my-properties",
    Element: <MyPropertiesPage />,
    param: true,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: "Add New",
    path: "/properties/add-new",
    Element: <AddNewPage />,
    param: true,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: "Edit house",
    path: "/properties/add-new/:id",
    Element: <AddNewPage />,
    param: true,
    search: "?",
    hidden: true,
    private: false,
  },
];
