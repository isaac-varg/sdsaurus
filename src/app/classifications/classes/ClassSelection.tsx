"use client"
import { classificationActions, selectHazardClassifications } from '@/redux/classificationsSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useId} from 'react'
import Select, { MultiValue, ActionMeta }from "react-select"

type OptionType = {
    value: string,
    label: string,
}

const ClassSelection = ({options} : {options: OptionType[]}) => {

    const dispatch = useAppDispatch();
    const selectedOptions = useAppSelector(selectHazardClassifications)

    const handleChange = (selected: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>)  => {
        dispatch(classificationActions.setHazardClassifications(selected as any))
    }
  return (
    <div>

        <Select
            isMulti
            instanceId={useId()}
            options={options}
            onChange={handleChange}
            defaultValue={selectedOptions}
        />
    </div>
  )
}

export default ClassSelection