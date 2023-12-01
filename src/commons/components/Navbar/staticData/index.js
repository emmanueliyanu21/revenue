import Invoice from "../../../../assets/svgs/invoicing.svg";
import Store from "../../../../assets/svgs/store.svg";
import Link from "../../../../assets/svgs/link.svg";
import MediaKit from "../../../../assets/svgs/media-kit.svg";

const navData = {
  centerMenu: [
    { name: "Home", icon: "home", path: "/home" },
    { name: "Analytics", icon: "analytics", path: "/analytics" },
    { name: "Revenue", icon: "money", path: "/" },
    { name: "CRM", icon: "crm", path: "/crm" },
    {
      name: "Apps",
      icon: "widget",
      hasSubMenu: true,
      subMenu: [
        {
          icon: "link",
          name: "Link in Bio",
          text: "Manage Your Link in Bio",
          path: "/bio",
        },
        {
          icon: "store",
          name: "Store",
          text: "Manage Your Store Activities",
          path: "/analytics",
        },
        {
          icon: "mediaKit",
          name: "Media Kit",
          text: "Manage Your Media Kit",
          path: "/media-kit",
        },
        {
          icon: "invoice",
          name: "Invoicing",
          text: "Manage Your Invoicing",
          path: "/invoice",
        },
        {
          icon: "invoice",
          name: "Booking",
          text: "Manage Your Booking",
          path: "/booking",
        },
      ],
    },
  ],
  rightMenu: [
    { name: "notification", icon: "bell" },
    { name: "chat", icon: "chat" },
    {
      name: "settings",
      icon: "hamburger",
      hasSubMenu: true,
      subMenu: [
        {
          icon: "bell",
          name: "Settings",
          path: "/settings",
        },
        {
          icon: "bell",
          name: "Purchase History",
          path: "/purchase-history",
        },
        {
          icon: "bell",
          name: "Refer and Earn",
          path: "/refer-earn",
        },
        {
          icon: "bell",
          name: "Integrations",
          path: "/integrations",
        },
        {
          icon: "bell",
          name: "Report Bug",
          path: "/report-bug",
        },
        {
          icon: "bell",
          name: "Switch Account",
          path: "/accounts",
        },
        {
          icon: "bell",
          name: "Sign Out",
        },
      ],
    },
  ],
  sideMenu: [
    { icon: Link, label: "Link in Bio", path: "/analytics" },
    { icon: Store, label: "Store", path: "/analytics" },
    { icon: MediaKit, label: "Media Kit", path: "/analytics" },
    { icon: Invoice, label: "Invoicing", path: "/analytics" },
  ],
};

export default navData;
