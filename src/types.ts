import { ILayoutState } from './reducers/layout';
import { IArticleState } from './reducers/article';

export interface IFetchState<T> {
  fetching: boolean;
  error?: string;
  data: T;
}

export interface IPendingState {
  pending: boolean;
  error?: string;
}

export interface IIcons {
  logo: string;
  dashboard: string;
  sessions: string;
  meetings: string;
  files: string;
  conversations: string;
  settings: string;
  search: string;
  headerAvatar: string;
  articleAvatar: string;
  more: string;
  delete: string;
  card: string;
  cardActive: string;
  table: string;
  tableActive: string;
}

export interface IMenuItem {
  icon: string;
  link: string;
}

export interface ITabItem {
  icon: ITabItemIcon;
  onClick: () => void;
  label: string;
}

interface ITabItemIcon {
  default: string;
  active: string;
}

export interface IAppState {
  layout: ILayoutState;
  article: IArticleState;
}

export interface IArticle {
  avatar: string;
  author: string;
  email: string;
  isRead: boolean;
  jobTitle: string;
  title: string;
  desc: string;
  tags: string[];
  id: number;
}
