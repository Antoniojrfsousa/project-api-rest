import fs from "fs";
import path from "path";
import { PodcastsModel } from "../models/podcast-model";




const pathDate = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
    podcastsName?:string
): Promise<PodcastsModel[]> =>{
    const rawdata = fs.readFileSync(pathDate, "utf-8")
    let jsonFile = JSON.parse(rawdata);


    if(podcastsName){
        jsonFile = jsonFile.filter((podcast:PodcastsModel) => podcast.podcastName === podcastsName )
    }


    return jsonFile;
}