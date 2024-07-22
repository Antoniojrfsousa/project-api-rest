import * as http from "http";

import { getListeEpisodes, getFilterEpisodes } from "./controllers/podecasts-crotroller";
import { HttpMethod } from "./utils/http-methods";
import { Routes } from "./routes/routes";

export const app = async (request: http.IncomingMessage, response:http.ServerResponse) =>{
       
       
    //queryString
    const baseUrl = request.url?.split("?") [0];

         
    // listar podcasts
     if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
       await  getListeEpisodes(request, response);
     }

     if(request.method === HttpMethod.GET && baseUrl === Routes.ESPISODE){
         await getFilterEpisodes(request, response);
     }
 } 


