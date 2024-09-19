import { addTask, createTask, tasksReducer, TasksState } from './tasks-slice';

describe('tasksSlice', function () {
  const initialState: TasksState = {
    entities: [
      createTask({ title: 'write tests' }),
      createTask({ title: 'make them pass' }),
    ],
  };

  it(`should add a task when the ${addTask}`, function () {
    const task = createTask({ title: 'profit' });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual(initialState.entities.concat(task));
  });
});
