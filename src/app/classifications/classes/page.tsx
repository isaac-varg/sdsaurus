import PageTitle from '@/components/PageTitle'
import Providers from '@/components/Providers'
import React from 'react'
import DB from '@/config/DB'
import { convertToPlainObj, resultsArrayChangeKey } from '@/utilities/objectModifier'
import ClassSelection from './ClassSelection'

export const dynamic = 'force-dynamic'

const getHazardClassifications = async () => {
  const results = await DB.collection('hazardClassifications').getFullList({
    sort: 'code',
  });

  return results;
}


const HazardousComponents = async () => {

  const classificationsData = await getHazardClassifications();
  // changes id to uuid to not interefere with form and converts to plain object
  const classifications = convertToPlainObj(resultsArrayChangeKey(classificationsData, "id", "uuid"));

  const selectOptions = classifications.map((item) => ({
    value: item.uuid,
    label: `[${item.code}] ${item.statement}`,
  }));


  return (
    <div>
      <PageTitle title="Triggered Classifications" />

      <p className='mb-6'>The hazard classificatons that were triggered. This allows for the proper codification and information to be added to the SDS.</p>

      <Providers>
        <ClassSelection options={selectOptions} />

      </Providers>


    </div>
  )
}

export default HazardousComponents