import { ParentInterface } from 'interfaces/parent';
import { TeacherInterface } from 'interfaces/teacher';
import { GetQueryInterface } from 'interfaces';

export interface ConversationInterface {
  id?: string;
  parent_id: string;
  teacher_id: string;
  topic: string;
  message: string;
  date_time: any;
  created_at?: any;
  updated_at?: any;

  parent?: ParentInterface;
  teacher?: TeacherInterface;
  _count?: {};
}

export interface ConversationGetQueryInterface extends GetQueryInterface {
  id?: string;
  parent_id?: string;
  teacher_id?: string;
  topic?: string;
  message?: string;
}
