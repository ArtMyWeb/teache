import { Home, Faq, Policy } from "../pages";

export const routesPath = {
  main: "/",
  faq: "/faq",
  privacy: "/privacy-policy",
};

export const routes = [
  {
    path: routesPath.main,
    component: <Home />,
  },
  {
    path: routesPath.faq,
    component: <Faq />,
  },
  {
    path: routesPath.privacy,
    component: <Policy />,
  },
];
