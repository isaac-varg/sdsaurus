'use server'

import DB from "@/config/DB";
import { HazardComponent } from "@/types/HazardComponent";

export const removeComponent = async (uuid: string) => {
    await DB.collection('hazardousComponents').delete(uuid);
}

export const addComponent = async (data: HazardComponent) => {
    await DB.collection('hazardousComponents').create(data);
}

export const updateComponent = async (id: string, data: HazardComponent) => {
    await DB.collection('hazardousComponents').update(id, data);
}