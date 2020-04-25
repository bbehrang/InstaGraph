import DataLoader from 'dataloader';
import {getUsersByIds} from "./resolvers";

export function userLoaderById(){
    return new DataLoader(getUsersByIds);
}
