import { Constants } from "../../core/common/constants";
import {Md5} from 'ts-md5';

export function generateQuery(page: number, ) {
    const timestamp = Number(new Date());
    const hash = Md5.hashStr(timestamp + Constants.PRIVATE_KEY + Constants.PUBLIC_KEY)
    const query = `ts=${timestamp}&orderBy=name&offset=${page}&limit=8&apikey=${Constants.PUBLIC_KEY}&hash=${hash}`;
    return query;
}