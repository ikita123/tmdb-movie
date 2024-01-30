import endPoint from "./_endPoint"
import { axiosCallAdvanced }  from './_main'

const rootPath = endPoint.personRoute.root


export const popularPersonList = async (parameters) => {
    return (
        await axiosCallAdvanced({
            ...parameters,
            baseURL: rootPath,
            path: endPoint.personRoute.popular,
            method: endPoint.methodType.get
        })
    )?.data
}


export default {
	popularPersonList
}
