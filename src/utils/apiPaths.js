export const BASE_URL = "http://localhost:5000";

//utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: '/api/auth/register', //Register a new user(Admin or Member)
        LOGIN: '/api/auth/login', //Authenticate user & return JWT token
        GET_PROFILE: '/api/auth/profile', //Get logged-in user details
    },
    USERS: {
        GET_ALL_USER: "/api/users", //Get all users(Admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by ID
        CREATE_USER: "/api/users", //crate a new users(Admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, //uPDATE USER DETAILS
        DELETE_USER: (userId) => `/api/users/${userId}`, //Delete a user
    },
    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get Dashboard Data
        GET_User_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", //Get user Dashboard Data
        GET_ALL_TASKS: "/api/tasks",//get all tasks (Admin: all, User: only assignment)
        GET_TASK_BY_ID: (taskId) => `/api/task/${taskId}`, //Get task by ID
        CREATE_TASK: "/api/tasks", //crate a new task(Admin only)
        UPDATE_TASK: (taskId) => `/api/users/${taskId}`,//update task details
        DELETE_TASK: (taskId) => `/api/users/${taskId}`,//Delete a task(Admin only)

        UPDATE_TASK_STATUS: (taskId) => `/api/users/${taskId}/status`,//update task status
        UPDATE_TODO_CHECKLIST: (taskId) => `/api/users/${taskId}/todo`,//update task status
    },
    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", //Download all tasks as an Excel/PDF report
        EXPORT_USER: "/api/reports/export/users", //Download user-task report
    },
    IMAGE: {
        UPLOAD_IMAGE: "api/auth/upload-image"
    }
}