import endPoint from "./_endPoint"
import { axiosCallAdvanced }  from './_main'

const rootPath = endPoint.movieRoute.root


export const movieTopList = async (parameters) => {
    return (
        await axiosCallAdvanced({
            ...parameters,
            baseURL: rootPath,
            path: endPoint.movieRoute.topRated,
            method: endPoint.methodType.get
        })
    )?.data
}

export const movieNowPlayingList = async (parameters) => {
    return (
        await axiosCallAdvanced({
            ...parameters,
            baseURL: rootPath,
            path: endPoint.movieRoute.new,
            method: endPoint.methodType.get
        })
    )?.data
}


export default {
	movieTopList,
    movieNowPlayingList
}
