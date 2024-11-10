export interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
  language_code?: string;
  auth_date: number;
}

export interface WebAppInitData {
  user?: TelegramUser;
  auth_date?: number;
}
