import { axiosBase } from "./axiosBase"


export const baseService = {

    getAll: async (endpoint) => {

        let responseData = [];

    
        await axiosBase.get(endpoint)
            .then(res => {
                responseData = res.data
            })
        return responseData

    },
  }