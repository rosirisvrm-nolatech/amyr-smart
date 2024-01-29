import { IconCrane, IconDropCircle } from "@tabler/icons-react";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export type SidebarItem = {
  title: string;
  icon: any;
  href: string;
}

export const MenuItemsAdmin: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: SpaceDashboardOutlinedIcon,
    href: "/"
  },
  {
    title: "ETAS",
    icon: ArticleOutlinedIcon,
    href: "/etas"
  },
  {
    title: "Usuarios",
    icon: PeopleAltOutlinedIcon,
    href: "/usuarios"
  },
  {
    title: "Buques",
    icon: DirectionsBoatOutlinedIcon,
    href: "/buques"
  },
  {
    title: "Puertos",
    icon: IconCrane,
    href: "/puertos"
  },
  {
    title: "Rutas",
    icon: ModeOfTravelOutlinedIcon,
    href: "/rutas"
  },
  {
    title: "Estadísticas",
    icon: AnalyticsOutlinedIcon,
    href: "/estadisticas"
  },
  {
    title: "Combustible",
    icon: IconDropCircle,
    href: "/combustible"
  },
];

export const MenuItemsSupervisor: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: SpaceDashboardOutlinedIcon,
    href: "/"
  },
  {
    title: "ETAS",
    icon: ArticleOutlinedIcon,
    href: "/etas"
  },
  {
    title: "Buques",
    icon: DirectionsBoatOutlinedIcon,
    href: "/buques"
  },
  {
    title: "Rutas",
    icon: ModeOfTravelOutlinedIcon,
    href: "/rutas"
  },
  {
    title: "Estadísticas",
    icon: AnalyticsOutlinedIcon,
    href: "/estadisticas"
  },
  {
    title: "Combustible",
    icon: IconDropCircle,
    href: "/combustible"
  },
];