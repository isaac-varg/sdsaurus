import PageTitle from '@/components/PageTitle'
import Providers from '@/components/Providers'
import React from 'react'
import ComponentsForm from './ComponentsForm'
import DB from '@/config/DB'
import { convertToPlainObj, resultsArrayChangeKey } from '@/utilities/objectModifier'
import { HazardComponent } from '@/types/HazardComponent'

export const dynamic = 'force-dynamic'

const getHazardousComponents = async () => {
    const results = await DB.collection('hazardousComponents').getList(1, 10,
        {});

    return results.items;
}


const HazardousComponents = async () => {

    const rawComponentsData = await getHazardousComponents();
    // changes id to uuid to not interefere with form and converts to plain object
    const componentsData = convertToPlainObj(resultsArrayChangeKey(rawComponentsData, "id", "uuid"));


  return (
    <div>
        <PageTitle title="Hazardous Components" />

        <p className='mb-6'>Hazardous components are materials that contributed to the over-all classification.</p>

        <Providers>
            <ComponentsForm components={componentsData as [HazardComponent]} />
        </Providers>

    </div>
  )
}

export default HazardousComponents