const useToken = () => {

    const setToken = (newToken: string | null) => {
        window.localStorage.setItem("token", newToken || "");
    };

    const getToken = () => window.localStorage.getItem("token");

    const removeToken = () => {
        window.localStorage.removeItem("token");
    };

    const existToken = (): boolean => !!getToken() || getToken() === "";

    const setRefreshToken = (newToken: string | null) => {
        window.localStorage.setItem("refreshToken", newToken || "");
    };

    const getRefreshToken = () => window.localStorage.getItem("refreshToken");

    const removeRefreshToken = () => {
        window.localStorage.removeItem("refreshToken");
    };

    const existRefreshToken = (): boolean => !!getRefreshToken() || getRefreshToken() === "";

    return {
        setToken,
        removeToken,
        getToken,
        existToken,
        setRefreshToken,
        getRefreshToken,
        removeRefreshToken,
        existRefreshToken
    };
};

const useSystemStore = defineStore("systemStore", () => (
    {
        ...useToken(),
    }
));

export default useSystemStore;
