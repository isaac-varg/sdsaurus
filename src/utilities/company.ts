'use server'

import { Company } from "@/types/Company";
import DB from "@/config/DB";

export const updateCompany = (id: string, data: Company) => {
    DB.collection('companies').update(id, data).then(result => {
      console.log(result)
    }).catch(error => console.log(error));
}
