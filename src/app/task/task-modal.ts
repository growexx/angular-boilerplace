export interface taskDetails {
    "todos": [
        {
            "id": number,
            "todo": string,
            "completed": boolean,
            "userId": number
        },

    ],
    "total": number,
    "skip": number,
    "limit": number
}

export type taskDetailsType = taskDetails


export interface addTask {
    todo: string,
    completed: boolean,
    userId: number,
}

export type addTaskType = addTask;
