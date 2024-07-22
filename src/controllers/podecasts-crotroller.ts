import {IncomingMessage, ServerResponse} from 'http';

import {serviceListEpisodes} from '../services/list-episodes-service'
import { servicerFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';


const DEFAULT_CONTENT = {"Content-Type": ContentType.JSON}
export const getListeEpisodes = async (
    req : IncomingMessage, 
    res : ServerResponse
) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
};


export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content: PodcastTransferModel = await servicerFilterEpisodes(req.url); 

    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.write(JSON.stringify(content.body));

    res.end();
};