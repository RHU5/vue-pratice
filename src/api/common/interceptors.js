import store from '@/store';

export function setInterceptors(api) {
    api.interceptors.request.use(
        (config) => {
            config.headers.Authorization = store.state.token;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return api;
}
