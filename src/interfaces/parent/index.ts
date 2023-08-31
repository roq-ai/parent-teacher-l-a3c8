import { ConversationInterface } from 'interfaces/conversation';
import { UserInterface } from 'interfaces/user';
import { StudentInterface } from 'interfaces/student';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  user_id: string;
  student_id: string;
  relationship: string;
  contact_number: string;
  address: string;
  created_at?: any;
  updated_at?: any;
  conversation?: ConversationInterface[];
  user?: UserInterface;
  student?: StudentInterface;
  _count?: {
    conversation?: number;
  };
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  student_id?: string;
  relationship?: string;
  contact_number?: string;
  address?: string;
}
