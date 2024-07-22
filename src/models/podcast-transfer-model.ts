import { PodcastsModel } from "./podcast-model";

export interface PodcastTransferModel {
    statusCode: number,
    body: PodcastsModel[];
}