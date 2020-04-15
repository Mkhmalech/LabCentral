import App from "./web/App";
import  {AdminLayout}  from "./admin/layout";
export const routes = {
  webpages: {
    path: "/website/*",
    component: App
  },
  adminpages: {
    path: "/admin/*",
    component: AdminLayout
  }
};
