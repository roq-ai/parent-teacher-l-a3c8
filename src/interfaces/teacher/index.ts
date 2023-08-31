import { ConversationInterface } from 'interfaces/conversation';
import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  user_id: string;
  school_id: string;
  subject: string;
  qualification: string;
  experience: number;
  created_at?: any;
  updated_at?: any;
  conversation?: ConversationInterface[];
  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {
    conversation?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  school_id?: string;
  subject?: string;
  qualification?: string;
}
