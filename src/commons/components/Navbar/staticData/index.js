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
          path: "/analytics",
        },
        {
          icon: "invoice",
          name: "Invoicing",
          text: "Manage Your Invoicing",
          path: "/analytics",
        },
        {
          icon: "invoice",
          name: "Booking",
          text: "Manage Your Booking",
          path: "/analytics",
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
        },
        {
          icon: "bell",
          name: "Purchase History",
        },
        {
          icon: "bell",
          name: "Refer and Earn",
        },
        {
          icon: "bell",
          name: "Integrations",
        },
        {
          icon: "bell",
          name: "Report Bug",
        },
        {
          icon: "bell",
          name: "Switch Account",
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
