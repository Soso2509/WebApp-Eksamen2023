import { describe, it, expect } from 'vitest';
import { fetchTasks } from '@/controller/taskController';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const API_URL = 'http://localhost:3000/api/restapi';

const api = setupServer(
  rest.get(API_URL, (request, response, context) => {
    return response(context.json({ success: true, data: mockTasks }));
  })
);

const mockTasks = [
  {
    id: 1, 
    text: 'Task 1', 
    type: 'add', 
    data: '90|3' },

  { id: 2, 
    text: 'Task 2', 
    type: 'multiply', 
    data: '4|44' },
  { id: 3, 
    text: 'Task 3', 
    type: 'subtract', 
    data: '78|5' },

  { id: 4, 
    text: 'Task 4', 
    type: 'add', 
    data: '56|34' },

  { id: 5, 
    text: 'Task 5', 
    type: 'multiply', 
    data: '24|89' },
];

const setApiHandlers = () => {
  api.use(
    rest.get(API_URL, (request, response, context) => {
      return response(context.json({ success: true, data: mockTasks }));
    })
  );
};

const cleanupApiHandlers = () => {
  api.use();
};

describe('fetchTasks', () => {
  beforeAll(setApiHandlers);
  afterAll(cleanupApiHandlers);

  it("Successfully retrieves tasks", async () => {
    const tasks = await fetchTasks('someType', ' ');
    expect(tasks).toEqual(mockTasks);
  });

  it("Should generate an error when the response is not successful.", async () => {
    setApiHandlers(); 
    api.use(
      rest.get(API_URL, (request, response, context) => {
        return response(context.status(404));
      })
    );

    await expect(fetchTasks('someType', ' ')).rejects.toThrow('Encountered an issue while retrieving tasks. HTTP Status: 404');
  });
});
