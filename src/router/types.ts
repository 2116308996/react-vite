import { ReactNode } from 'react';

export interface RouteMeta {
  showMenu: boolean;
}

export interface RouteItem {
  path: string;
  name: string;
  meta?: RouteMeta;
  element?: ReactNode;
  children?: RouteItem[];
} 