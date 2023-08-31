import axios from 'axios';
import queryString from 'query-string';
import { ConversationInterface, ConversationGetQueryInterface } from 'interfaces/conversation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getConversations = async (
  query?: ConversationGetQueryInterface,
): Promise<PaginatedInterface<ConversationInterface>> => {
  const response = await axios.get('/api/conversations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createConversation = async (conversation: ConversationInterface) => {
  const response = await axios.post('/api/conversations', conversation);
  return response.data;
};

export const updateConversationById = async (id: string, conversation: ConversationInterface) => {
  const response = await axios.put(`/api/conversations/${id}`, conversation);
  return response.data;
};

export const getConversationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/conversations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConversationById = async (id: string) => {
  const response = await axios.delete(`/api/conversations/${id}`);
  return response.data;
};
