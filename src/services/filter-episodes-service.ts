import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { PodcastsModel } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";


export const servicerFilterEpisodes = async (
    podcastName:string | undefined

 ):Promise<PodcastTransferModel> => {


    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }; 

    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length !== 0? StatusCode.OK : StatusCode.NoContent

    responseFormat.body = data;

    return responseFormat;
}