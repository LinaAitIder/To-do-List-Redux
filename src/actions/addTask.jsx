const ADD_TASK = 'ADD_TASK';
const addTask = (task) => {
    return {
        type: ADD_TASK,
        task : task
    }
};

export default addTask;
export { ADD_TASK };