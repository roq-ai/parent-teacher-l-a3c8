import { ParentInterface } from 'interfaces/parent';
import { SchoolInterface } from 'interfaces/school';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  school_id: string;
  user_id: string;
  grade: number;
  performance_data: string;
  routine: string;
  created_at?: any;
  updated_at?: any;
  parent?: ParentInterface[];
  school?: SchoolInterface;
  user?: UserInterface;
  _count?: {
    parent?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  school_id?: string;
  user_id?: string;
  performance_data?: string;
  routine?: string;
}
