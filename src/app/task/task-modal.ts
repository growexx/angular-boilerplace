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
