import http from "../http-common";

const getAll = () => {
    return http.get("/get-all");
};

const get = id => {
    return http.get(`/get/${id}`);
};

const create = data => {
    return http.post("/create", data);
};

const update = (id, data) => {
    return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
    return http.delete(`/delete/${id}`);
};

const notaCall = {
    getAll,
    get,
    create,
    update,
    remove
};

export default notaCall;