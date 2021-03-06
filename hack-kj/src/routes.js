
import Dashboard from "@material-ui/icons/Grain";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Cloud from "@material-ui/icons/Cloud";

import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Feed from "views/Feed/Feed";
import Schemes from 'views/Schemes/Schemes';
import Pesticides from 'views/Pesticides/Pesticides';
import Download from 'views/Download/Download';

import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { Gallery } from "views/Gallery/Gallery";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Rainfall Prediction",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Crop Prediction",
    rtlName: "ملف تعريفي للمستخدم",
    icon: LibraryBooks,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "News Feed",
    rtlName: "ملف تعريفي للمستخدم",
    icon: BubbleChart,
    component: Feed,
    layout: "/admin"
  },
  // {
  //   path: "/gallery",
  //   name: "Rainfall Distribution",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Language,
  //   component: Gallery,
  //   layout: "/admin"
  // },
  {
    path: "/Schemes",
    name: "Government Schemes",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Notifications,
    component: Schemes,
    layout: "/admin"
  },
  {
    path: "/Pesticides",
    name: "Pesticides",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Notifications,
    component: Pesticides,
    layout: "/admin"
  }
  // {
  //   path: "/Download",
  //   name: "Pdf Download",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Cloud,
  //   component: Download,
  //   layout: "/admin"
  // }
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
